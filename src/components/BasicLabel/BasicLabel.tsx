import styles from './basic-label.module.scss'

interface BasicLabelProps {
    htmlFor?: string
}

const BasicLabel = (props: React.PropsWithChildren<BasicLabelProps>) => {
  const { htmlFor, children } = props
  
  return (
    <label className={styles.label} htmlFor={htmlFor}>{children}</label>
  )
}

export default BasicLabel