import styles from './form-error.module.scss'

const FormError = (props: React.PropsWithChildren<object>) => {
  const { children } = props

  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default FormError