
export const storeTokens = (accessToken: string, refreshToken: string) => {
    // // Almacena el access token en el almacenamiento local
    // localStorage.setItem('accessToken', accessToken);

    // Almacena el refresh token en una cookie
    document.cookie = `refreshToken=${encodeURIComponent(refreshToken)}; path=/; Secure; SameSite=Strict`;
    document.cookie = `accessToken=${encodeURIComponent(accessToken)}; path=/; Secure; SameSite=Strict`;
};

export const updateAccessToken = (accessToken: string) => {
    document.cookie = `accessToken=${encodeURIComponent(accessToken)}; path=/; Secure; SameSite=Strict`;
};

export const getRefreshTokenCookie = () => {
    try {
        const cookies = document.cookie.split(';');
        let refreshToken = '';
        cookies.forEach((cookie) => {
            const [name, value] = cookie.split('=');
            if (name.trim() === 'refreshToken') {
                refreshToken = decodeURIComponent(value);
            }
        });
        return refreshToken;
    } catch (error) {
        console.log('Error getting refreshToken', error);
    }
};

export const getAccessTokenCookie = () => {
    const cookies = document.cookie.split(';');
    let accessToken = '';
    cookies.forEach((cookie) => {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'accessToken') {
            accessToken = decodeURIComponent(value);
        }
    });
    return accessToken;
};

export const removeTokens = () => {
    document.cookie = 'refreshToken=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict';
};