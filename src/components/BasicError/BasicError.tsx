import cx from 'classnames'

import styles from './basic-error.module.scss'

interface BasicErrorProps {
    isHidden?: boolean
}

const BasicError = (props: React.PropsWithChildren<BasicErrorProps>) => {
  const { isHidden = true, children } = props

  return (
    <div className={cx(styles.error, isHidden && styles.isHidden)}>{children}</div>
  )
}

export default BasicError