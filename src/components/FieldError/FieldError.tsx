import cx from 'classnames'

import styles from './field-error.module.scss'

interface FieldErrorProps {
    isHidden?: boolean
}

const FieldError = (props: React.PropsWithChildren<FieldErrorProps>) => {
  const { isHidden = true, children } = props

  return (
    <div className={cx(styles.error, isHidden && styles.isHidden)}>{children}</div>
  )
}

export default FieldError