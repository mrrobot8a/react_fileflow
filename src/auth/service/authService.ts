
import { AccessTokenResponse } from '../helper/types';
import { AuthResponse, User } from '../interface/ApiResponse';
import { AuthSignupResponse } from '../interface/AuthSingupResponse';
import { UserToSingUp } from '../interface/UserToSingUp';
import { BASEAPIURL } from './../../environment/dev';



export async function requestNewAccessTokenApi(accessToken: string): Promise<AuthResponse> {

    try {

        // se hace la peticion al servidor para obtener un nuevo token de acceso
        const response = await fetch(`${BASEAPIURL}/auth/refresh-token`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${accessToken}`,
            },
            credentials: 'include',
            // body: JSON.stringify({ refreshToken }),
        });
        // se valida la respuesta del servidor 
        if (response.ok) {
            const data = await response.json() as AuthResponse;
            console.log('data:', data);

            if (data.error) {
                console.error('Error:', data.error);
                return data;
            }

            return data;


        } else if (response.status === 401) {

            console.error('Unauthorized');
            throw new Error('Unauthorized');
        } else {

            console.error('Error:', response.status, response.statusText);
            throw new Error(`Error refreshing token authservices: ${response.status} ${response.statusText}`);
        }

    } catch (error) {
        console.error('Error refreshing token authservices:', error);
        return {} as AuthResponse;
    }


}

export async function signupUserApi(userRegister: UserToSingUp): Promise<AuthSignupResponse> {

    try {

        const result = await fetch(`${BASEAPIURL}/auth/sing-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...userRegister }),
        });

        const data = await result.json() as AuthSignupResponse;

        if (result.ok) {
            return data;
        }

        if (result.status === 401) {
            console.error('Unauthorized');
            return { success: false, error: data.error } as AuthSignupResponse;
        }

        if (result.status === 409){
            console.error('Conflict');
            return { success: false, error: data.error } as AuthSignupResponse;
        }


        // Manejo de otros errores
        console.error('Error en la respuesta del servidor:', result.statusText);
        throw new Error(`Error refreshing token authservices: ${result.status} ${result.statusText}`);



    } catch (error) {
        console.error('Error fetching user:', error);
        return { success: false, error: String(error) } as AuthSignupResponse;
    }

}


export async function loginUserApi(email: string, password: string): Promise<AuthResponse> {

    try {

        const result = await fetch(`${BASEAPIURL}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });

        if (result.ok) {
            const data = await result.json() as AuthResponse;
            return data;
        }

        if (result.status === 401) {
            console.error('Unauthorized');
            return { success: false, error: 'No Authorizate' } as AuthResponse;
        }

        // Manejo de otros errores
        console.error('Error en la respuesta del servidor:', result.statusText);
        return { success: false, error: 'Error en la solicitud Intentlo mas tarde' } as AuthResponse;




    } catch (error) {
        console.error('Error fetching user:', error);
        return { success: false, message: 'error al realizar la peticion' } as AuthResponse;
    }




}




//obtener usuario
export async function getUserApi(token: string, email: string): Promise<User> {

    try {

        const response = await fetch(`${BASEAPIURL}/api/v1/admin/findUserForEmail?email=${encodeURIComponent(email)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        // se valida la respuesta del servidor 
        if (response.ok) {
            const data = await response.json();

            console.log('data getUserApi:', data);


            if (data.error) {
                console.error('Error:', data.error);
                return {} as User;
            }

            return data.user as User;


        } else if (response.status === 401) {

            console.error('Unauthorized');
            return {} as User;

        } else {

            console.error('Error:', response.status, response.statusText);
            throw new Error(`Error refreshing token authservices: ${response.status} ${response.statusText}`);
        }


    } catch (error) {
        console.error('Error fetching user:', error);
        return {} as User;
    }

}


// export async function logoutUserApi(token: string): Promise<AccessTokenResponse> {
    
//         try {
    
//             const response = await fetch(`${BASEAPIURL}/auth/logout`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',},
//                 }
//             } catch (error) {
                
//             }
// }