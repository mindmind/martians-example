import styles from './field-label.module.scss'

interface FieldLabelProps {
  htmlFor?: string
}

const FieldLabel = (props: React.PropsWithChildren<FieldLabelProps>) => {
  const { htmlFor, children } = props

  return (
    <label className={styles.fieldLabel} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default FieldLabel
