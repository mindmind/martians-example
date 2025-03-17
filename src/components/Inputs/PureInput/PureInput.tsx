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
  const {
    className,
    name,
    value = '',
    type = 'text',
    isInvalid,
    ...rest
  } = props

  return (
    <input
      {...rest}
      className={cx(styles.input, isInvalid && styles.isInvalid, className)}
      id={name}
      name={name}
      value={value}
      type={type}
      aria-invalid={isInvalid}
      data-testid={name}
    />
  )
}

export default PureInput
