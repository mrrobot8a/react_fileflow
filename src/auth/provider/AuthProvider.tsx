import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { AccessTokenResponse } from "../helper/types";
import { getAccessTokenCookie, getRefreshTokenCookie, removeTokens, storeTokens } from "../../utils/cookies";
import { getUserApi, requestNewAccessTokenApi } from "../service/authService";
import { AuthResponse, User } from "../interface/ApiResponse";
// pasa saner el estado de autenticación de la aplicacion

// Interfaz para las props del AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}
// Interfaz para el contexto de autenticación
interface AuthContextData {
    isAuthenticated: boolean;
    loading: boolean;
    getAccessToken: () => string | null;
    saveUser: (userData: AuthResponse) => void;
    getUser: () => User | undefined;
    getRefreshToken: () => string | null;
}



// Crear el contexto con valores predeterminados
const AuthContext = createContext<AuthContextData>({
    isAuthenticated: false,
    loading: true,
    getAccessToken: () => '',
    saveUser: () => { },
    getUser: () => ({} as User | undefined),
    getRefreshToken: () => '',
});

// Componente proveedor del contexto
export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // <- Estado de carga


    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [userData, setUserData] = useState<User>();



    function setAccessTokenAndRefreshToken(
        accessToken: string,
        refreshToken: string
    ) {
        console.log("setAccessTokenAndRefreshToken", accessToken, refreshToken);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        localStorage.setItem("token", JSON.stringify({ refreshToken }));
    }


    useEffect(() => {
        console.log('AuthProvider mounted');

        checkAuth();
    }, []);


    async function checkAuth() {
        // Comienza la verificación
        setLoading(true);

        //valida la autenticacion del usuario en memoria del navegador
        if (accessToken) {
            setIsAuthenticated(true);
        } else {
            // // si no hay token en memoria se accede a la cookie
            // let accessTokenOld = getAccessToken();
            // let accessTokenOld = accessToken;
            // console.log('Old access token:', accessTokenOld);
            // if (accessTokenOld) {
                const refreshToken = getRefreshToken();
                // Llama a la función que obtiene el nuevo Access Token
                const { user, accessToken: newAccessToken, refreshToken: token }: AuthResponse = await requestNewAccessTokenApi(refreshToken!);
                const email = user?.email;

                console.log('New access token:', newAccessToken);
                console.log('New refresh token:', token);
                if (newAccessToken) {
                    const userData:User  = await getUserApi(newAccessToken, email!);
                    console.log('User data authprovaider:', userData);
                    if (userData !== null) {
                        saveSessionInfo(userData, newAccessToken, token!);
                    }
                // }
            }
        }

        // Finaliza la verificación
        setLoading(false);
    }

    // funcion para guardar la informacion de la sesion
    function saveSessionInfo(userInfo: User, accessToken: string, refreshToken: string) {
        setUserData(userInfo);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        storeTokens(accessToken, refreshToken);
        setIsAuthenticated(true);
    }

    // funcion para obtener el token de acceso
    function getAccessToken() {
        return accessToken;
    };
    // funcion para obtener el token de refresco
    function getRefreshToken() {
        const token = getRefreshTokenCookie();
        console.log('Refresh token:', token);
        return token ? token : null;
    }
    // funcion para guardar el usuario
    function saveUser(userData: AuthResponse) {
        console.log('User registered PROVIDER:', userData);
        saveSessionInfo(userData.user!, userData.accessToken!, userData.refreshToken!);
    }

    function getUser(): User | undefined {
        return userData;
    }

    // Simulación de logout
    const logout = () => {
        setIsAuthenticated(false);
        setAccessToken(null);
        setRefreshToken(null);
        removeTokens();
    };

    // Retornar el proveedor con los valores del contexto
    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, saveUser, getUser,getAccessToken, getRefreshToken }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook para acceder al contexto de autenticación
export function useAuth() {
    return useContext(AuthContext);
}
