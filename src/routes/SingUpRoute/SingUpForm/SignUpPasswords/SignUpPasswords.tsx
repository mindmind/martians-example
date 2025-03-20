import { useFormContext } from 'react-hook-form'

import PasswordFormInput from 'src/components/Inputs/PasswordFormInput/PasswordFormInput'

const SignUpPasswords = () => {
  const { watch, trigger } = useFormContext()

  const handleChangePassword = () => {
    const confirmPasswordState = watch('confirmPassword')
    if (typeof confirmPasswordState !== 'undefined') {
      trigger('confirmPassword')
    }
  }

  return (
    <>
      <PasswordFormInput
        name="password"
        label="Password"
        autoComplete="new-password"
        rules={{ required: true, onChange: handleChangePassword }}
      />

      <PasswordFormInput
        name="confirmPassword"
        label="Confirm Password"
        autoComplete="new-password"
        rules={{
          required: 'Please confirm your password',
          validate: (value) =>
            value === watch('password') || 'Passwords do not match',
          onChange: () => trigger('confirmPassword'),
        }}
      />
    </>
  )
}

export default SignUpPasswords
