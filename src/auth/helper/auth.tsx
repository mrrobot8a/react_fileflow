// auth.js (puedes crear este archivo en una carpeta utils o similar)
export function isAuthenticated() {
    // Lógica de autenticación (ejemplo básico)
    // En un caso real, podrías verificar un token en localStorage, por ejemplo.
    return localStorage.getItem('authToken') !== null;
  }
  