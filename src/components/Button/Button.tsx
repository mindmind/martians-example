import cx from 'classnames'

import Spinner from 'src/components/Spinner/Spinner'

import styles from './button.module.scss'

interface ButtonProps {
    className?: string
    type?: 'button' | 'submit'
    isLoading?: boolean
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { className, type = 'button', isLoading, children } = props

  return (
    <button 
        className={cx(styles.button, className)} 
        type={type}
        disabled={isLoading}
    >
        {!isLoading ? children : <Spinner />}
    </button>
  )
}

export default Button