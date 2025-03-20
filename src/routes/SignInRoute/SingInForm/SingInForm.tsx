import AuthForm from 'src/components/AuthForm/AuthForm'
import FormInput from 'src/components/Inputs/FormInput/FormInput'
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
        <FormInput
          name="email"
          label="Email"
          type="email"
          autoComplete="username"
          autoFocus
          rules={{ required: true }}
        />

        <PasswordFormInput
          name="password"
          label="Password"
          autoComplete="current-password"
          rules={{ required: true }}
        />
      </AuthForm>

      <AuthFormLink to="/sign-up">Don't have an account? Sign up</AuthFormLink>

      <AuthFormLink to="/forgot">Forgot password?</AuthFormLink>
    </>
  )
}

export default SignInForm
