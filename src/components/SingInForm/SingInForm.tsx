import Form from 'src/components/Form/Form'
import EmailFormInput from 'src/components/Inputs/EmailFormInput/EmailFormInput'
import PasswordFormInput from 'src/components/Inputs/PasswordFormInput/PasswordFormInput'
import FormResult from 'src/components/FormResult/FormResult'
import Button from 'src/components/Button/Button'

import { useSignIn } from 'src/hooks/mutations/useSignIn'

import styles from './sing-in-form.module.scss'

import type { SignInPayload } from 'src/ts/user'

const SingInForm = () => {
  const signInMutation = useSignIn()

  const handleSubmit = async (data: SignInPayload) => {
    await signInMutation.mutateAsync(data)
  }

  console.dir(signInMutation.failureReason)

  return (
    <Form<SignInPayload> className={styles.wrapper} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Hello there</h1>

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

      {signInMutation.isError ? 
        <FormResult isSuccess={false}>{signInMutation.failureReason?.message ?? 'unknown error'}</FormResult>
      : null}

      {signInMutation.isSuccess ?
        <FormResult>{`The request is successful. Everything is fine.`}</FormResult>
      : null}

      <Button className={styles.button} type="submit" isLoading={signInMutation.isPending}>Let's go</Button>
    </Form>
  )
}

export default SingInForm
