import { AuthResponse } from "../../auth/helper/types";
import { storeTokens } from "../../utils/cookies";

/// Simulación del fetch que devuelve un AuthResponse
const mockFetchApi = async (url: string, options: any): Promise<Response> => {
    // Simulando la respuesta del servidor
    const mockResponse: AuthResponse = {
        message: 'User successfully registered',
        accessToken: 'mock_token_123456',
        refreshToken: 'mock_refresh_token_123456',
        user: {
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
        },
    };

    // Guardar el refresh token en una cookie
    storeTokens(mockResponse.accessToken, mockResponse.refreshToken);

    // Simulando el Response con status 200
    return new Promise((resolve) => {
        resolve(new Response(JSON.stringify(mockResponse), {
            status: 200, // Cambia este valor para simular otros estados como 400, 500, etc.
            headers: { 'Content-Type': 'application/json' }
        }));
    });
};

// Función que usa fetch y retorna el resultado
export const signupUserMock = async (email: string, password: string): Promise<Response> => {
    const result = await mockFetchApi('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    return result; // Retorna el objeto Response
};



