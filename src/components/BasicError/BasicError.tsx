import styles from './basic-error.module.scss'

const BasicError = (props: React.PropsWithChildren<object>) => {
  const { children } = props

  return (
    <div className={styles.error}>{children}</div>
  )
}

export default BasicError