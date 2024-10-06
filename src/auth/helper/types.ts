
export interface AuthResponse {
    message: string;
    accessToken: string;
    refreshToken: string;
    user: User;
}

export interface AuthResponseError {
    body: {
        error: string;
    };

}

export interface User {
    email: string;
    firstName: string;
    lastName: string;
}

export interface AccessTokenResponse {
    statusCode: number;
    body: {
        acccessToken: string;
        refreshToken: string;
    };
    error?: string;
}