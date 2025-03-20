import AuthForm from 'src/components/AuthForm/AuthForm'
import FormInput from 'src/components/Inputs/FormInput/FormInput'
import AuthFormLink from 'src/components/AuthForm/AuthFormLink/AuthFormLink'

import { useResetPassword } from 'src/hooks/mutations/useResetPassword'

import type { ForgotPayload } from 'src/ts/user'

const ForgotForm = () => {
  const resetPasswordMutation = useResetPassword()

  const handleSubmit = async (data: ForgotPayload) => {
    await resetPasswordMutation.mutateAsync(data)
  }

  return (
    <>
      <AuthForm<ForgotPayload>
        title="Reset password"
        submitText="Reset"
        isError={resetPasswordMutation.isError}
        isSuccess={resetPasswordMutation.isSuccess}
        isLoading={resetPasswordMutation.isPending}
        errorMessage={resetPasswordMutation.failureReason?.message}
        onSubmit={handleSubmit}
      >
        <FormInput
          name="email"
          label="Email"
          autoComplete="username"
          autoFocus
          type="email"
          rules={{ required: true }}
        />
      </AuthForm>

      <AuthFormLink to="/sign-in">Try to sign in again</AuthFormLink>
    </>
  )
}

export default ForgotForm
