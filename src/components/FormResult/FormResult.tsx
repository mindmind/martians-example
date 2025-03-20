import cx from 'classnames'

import styles from './form-result.module.scss'

interface FormErrorProps {
  isSuccess?: boolean
}

const FormError = (props: React.PropsWithChildren<FormErrorProps>) => {
  const { isSuccess = true, children } = props

  return (
    <div
      className={cx(
        styles.formResultWrapper,
        isSuccess ? styles.isSuccess : styles.isError,
      )}
      aria-live="polite"
    >
      {children}
    </div>
  )
}

export default FormError
