import Form from 'src/components/Form/Form'
import FormResult from 'src/components/FormResult/FormResult'
import Button from 'src/components/Button/Button'

import styles from './auth-form.module.scss'

import type { FieldValues } from 'react-hook-form'

interface AuthFormProps<T> {
    title: string
    submitText: string
    isError?: boolean
    isSuccess?: boolean
    isLoading?: boolean
    errorMessage?: string
    onSubmit: (data: T) => void
}

const AuthForm = <T extends FieldValues,>(props: React.PropsWithChildren<AuthFormProps<T>>) => {
  const {
    title, 
    submitText,
    isError,
    isSuccess,
    isLoading,
    errorMessage = 'unknown error',
    onSubmit,
    children 
  } = props

  return (
    <Form<T> className={styles.wrapper} onSubmit={onSubmit}>
      <h1 className={styles.title}>{title}</h1>

      {children}

      {isError ? 
        <FormResult isSuccess={false}>{errorMessage}</FormResult>
      : null}

      {isSuccess ?
        <FormResult>The request is successful. Everything is fine.</FormResult>
      : null}

      <Button className={styles.button} type="submit" isLoading={isLoading}>{submitText}</Button>
    </Form>
  )
}

export default AuthForm
