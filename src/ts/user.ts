export type SignInPayload = {
    email: string
    password: string
}

export type SignUpPayload = {
    email: string
    password: string
    firstName: string
    lastName: string
}

export type ForgotPayload = {
    email: string
}