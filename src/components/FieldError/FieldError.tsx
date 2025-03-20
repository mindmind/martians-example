import cx from 'classnames'

import styles from './field-error.module.scss'

interface FieldErrorProps {
  fieldName?: string
  isHidden?: boolean
}

const FieldError = (props: React.PropsWithChildren<FieldErrorProps>) => {
  const { fieldName, isHidden = true, children } = props

  return (
    <div
      className={cx(styles.fieldError, isHidden && styles.isHidden)}
      id={`${fieldName}Error`}
    >
      {children}
    </div>
  )
}

export default FieldError
