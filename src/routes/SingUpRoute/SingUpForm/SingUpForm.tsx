import AuthForm from 'src/components/AuthForm/AuthForm'
import FormInput from 'src/components/Inputs/FormInput/FormInput'
import EmailFormInput from 'src/components/Inputs/EmailFormInput/EmailFormInput'
import AuthFormLink from 'src/components/AuthForm/AuthFormLink/AuthFormLink'

import SignUpPasswords from './SignUpPasswords/SignUpPasswords'

import { useSignUp } from 'src/hooks/mutations/useSignUp'

import type { SignUpPayload } from 'src/ts/user'

const SignUpForm = () => {
    const signUpMutation = useSignUp()
    
    const handleSubmit = async (data: SignUpPayload) => {
        await signUpMutation.mutateAsync(data)
    }

    return (
        <>
            <AuthForm<SignUpPayload> 
                title="Sign Up" 
                submitText="Register me"
                isError={signUpMutation.isError}
                isSuccess={signUpMutation.isSuccess}
                isLoading={signUpMutation.isPending}
                errorMessage={signUpMutation.failureReason?.message}
                onSubmit={handleSubmit}
            >   
                <FormInput
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    rules={{ required: 'First name is required' }}
                />

                <FormInput
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    rules={{ required: 'Last name is required' }}
                />

                <EmailFormInput
                    name="email" 
                    label="Email"
                    placeholder="Enter your email"
                    rules={{ required: 'Email is required' }}
                />

                <SignUpPasswords />
            </AuthForm>

            <AuthFormLink to="/sign-in">Already have account? Sing In</AuthFormLink>
        </>
    )
}

export default SignUpForm