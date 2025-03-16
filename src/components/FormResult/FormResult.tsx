import cx from 'classnames'

import styles from './form-result.module.scss'

interface FormErrorProps {
  isSuccess?: boolean
}

const FormError = (props: React.PropsWithChildren<FormErrorProps>) => {
  const { isSuccess = true, children } = props

  return (
    <div className={cx(styles.wrapper, isSuccess ? styles.isSuccess : styles.isError)}>{children}</div>
  )
}

export default FormError