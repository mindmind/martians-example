import cx from 'classnames'

import styles from './button.module.scss'

interface ButtonProps {
    className?: string
    type?: 'button' | 'submit'
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { className, type = 'button', children } = props

  return (
    <button className={cx(styles.button, className)} type={type}>{children}</button>
  )
}

export default Button