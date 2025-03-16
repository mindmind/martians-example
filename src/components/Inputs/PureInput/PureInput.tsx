import cx from 'classnames'

import styles from './pure-input.module.scss'

interface PureInputProps {
    className?: string
    name: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    isInvalid?: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PureInput = (props: PureInputProps) => {
  const { className, value = '', type = 'text', isInvalid, ...rest } = props

  return (
    <input 
        {...rest} 
        className={cx(styles.input, isInvalid && styles.isInvalid, className)} 
        value={value} 
        type={type}
    />
  )
}

export default PureInput