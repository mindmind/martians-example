import Form from 'src/components/Form/Form'
import FormInput from 'src/components/Inputs/FormInput/FormInput'
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

      <FormInput
        required
        name="email" 
        type="email" 
        label="Email"
        placeholder="Enter your email"
      />

      <FormInput
        required
        name="password" 
        type="password"
        label="Password"
        placeholder="Enter your password"
      />

      <Button className={styles.button} type="submit">Let's go</Button>
    </Form>
  )
}

export default SingInForm
