export interface AuthResponse {
    success: boolean
    message: string
    user?: User    
    accessToken?: string
    refreshToken?: string
    error?: string
  }
  
  export interface User {
    fullName: any
    id: number
    firstName: string
    lastName: string
    position: string
    numberPhone: string
    email: string
    password: string
    roles: Role[]
    enabled: boolean
    error?: string
  }
  
  export interface Role {
    status: boolean
    authority: string
  }
  