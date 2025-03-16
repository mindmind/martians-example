import Form from 'src/components/Form/Form'
import EmailFormInput from 'src/components/Inputs/EmailFormInput/EmailFormInput'
import PasswordFormInput from 'src/components/Inputs/PasswordFormInput/PasswordFormInput'
import Button from 'src/components/Button/Button'

import styles from './sing-in-form.module.scss'

import type { SignInPayload } from 'src/ts/user'

const SingInForm = () => {
  const handleSubmit = () => {
    alert('here we go')
  }

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

      <Button className={styles.button} type="submit">Let's go</Button>
    </Form>
  )
}

export default SingInForm
