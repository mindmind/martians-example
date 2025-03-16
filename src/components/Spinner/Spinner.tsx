import styles from './spinner.module.scss'

interface SpinnerProps {
    size?: string
}

const Spinner = (props: SpinnerProps) => {
  const { size = '20px' } = props

  return (
    <div
      className={styles.spinner}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}

export default Spinner