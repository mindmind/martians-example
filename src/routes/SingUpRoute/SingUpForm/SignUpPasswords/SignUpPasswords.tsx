import { useFormContext } from 'react-hook-form'

import PasswordFormInput from 'src/components/Inputs/PasswordFormInput/PasswordFormInput'

const SignUpPasswords = () => {
  const { watch, trigger } = useFormContext()

  return (
    <>
      <PasswordFormInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        rules={{ required: true, onChange: () => trigger('confirmPassword') }}
      />

      <PasswordFormInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Enter your password again"
        rules={{
          required: true,
          validate: (value) =>
            value === watch('password') || 'Passwords do not match',
          onChange: () => trigger('confirmPassword'),
        }}
      />
    </>
  )
}

export default SignUpPasswords
