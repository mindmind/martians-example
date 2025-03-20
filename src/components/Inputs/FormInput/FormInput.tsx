import { useFormContext, useController } from 'react-hook-form'
import cx from 'classnames'

import PureInput from 'src/components/Inputs/PureInput/PureInput'
import FieldLabel from 'src/components/FieldLabel/FieldLabel'
import FieldError from 'src/components/FieldError/FieldError'

import styles from './form-input.module.scss'

export interface FormInputProps {
  className?: string
  name: string
  type?: React.HTMLInputTypeAttribute
  label?: string
  placeholder?: string
  rules?: {
    required?: string | boolean
    pattern?: { value: RegExp; message: string }
    validate?: (value: string) => boolean | string
    onChange?: () => void
  }
  postInputButton?: React.ReactNode
}

const FormInput = (props: FormInputProps) => {
  const {
    className,
    name,
    type = 'text',
    label,
    placeholder,
    rules,
    postInputButton,
  } = props

  const methods = useFormContext()

  const { field, fieldState } = useController({
    name,
    control: methods.control,
    rules,
  })

  const error = fieldState.invalid
    ? (fieldState.error?.message ?? 'unknown error')
    : '\u00A0'

  const isRequired = rules?.required ? true : undefined

  return (
    <div className={cx(styles.formInputWrapper, className)}>
      {label ? <FieldLabel htmlFor={name}>{label}</FieldLabel> : null}

      <div className={styles.formInputInner}>
        <PureInput
          {...field}
          className={cx(
            styles.formInput,
            Boolean(postInputButton) && styles.withPostInputButton,
          )}
          type={type}
          placeholder={placeholder}
          isInvalid={Boolean(fieldState.error)}
          isRequired={isRequired}
        />

        {postInputButton ? (
          <div className={styles.postInputButtonWrapper}>{postInputButton}</div>
        ) : null}
      </div>

      <FieldError isHidden={!error}>{error}</FieldError>
    </div>
  )
}

export default FormInput
