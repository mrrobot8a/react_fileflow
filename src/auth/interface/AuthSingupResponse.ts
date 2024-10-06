export interface AuthSignupResponse {
    message: string
    user: User
    error?: string
    success?: boolean
}

export interface User {
    id: number
    firstName: string
    lastName: string
    password: string
    email: string
    roles: Role[]
    enabled: boolean
    numberPhone: string
    position: string
}

export interface Role {
    status: boolean
    authority: string
}
