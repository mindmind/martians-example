import AuthForm from 'src/components/AuthForm/AuthForm'
import EmailFormInput from 'src/components/Inputs/EmailFormInput/EmailFormInput'
import PasswordFormInput from 'src/components/Inputs/PasswordFormInput/PasswordFormInput'
import AuthFormLink from 'src/components/AuthForm/AuthFormLink/AuthFormLink'

import { useSignIn } from 'src/hooks/mutations/useSignIn'

import type { SignInPayload } from 'src/ts/user'

const SignInForm = () => {
    const signInMutation = useSignIn()
    
    const handleSubmit = async (data: SignInPayload) => {
        await signInMutation.mutateAsync(data)
    }

    return (
        <>
            <AuthForm<SignInPayload> 
                title="Hello there" 
                submitText="Let's go"
                isError={signInMutation.isError}
                isSuccess={signInMutation.isSuccess}
                isLoading={signInMutation.isPending}
                errorMessage={signInMutation.failureReason?.message}
                onSubmit={handleSubmit}
            >
                <EmailFormInput
                    name="email" 
                    label="Email"
                    placeholder="Enter your email"
                    rules={{ required: 'Email is required' }}
                />

                <PasswordFormInput
                    name="password" 
                    label="Password"
                    placeholder="Enter your password"
                    rules={{ required: 'Password is required' }}
                />
            </AuthForm>

            <AuthFormLink to="/sign-up">Don't have an account? Sign up</AuthFormLink>
            
            <AuthFormLink to="/forgot">Forgot password?</AuthFormLink>
        </>
    )
}

export default SignInForm