import { useState } from 'react'
import cx from 'classnames'

import FormInput from 'src/components/Inputs/FormInput/FormInput'

import showIconImg from './assets/show.svg'
import hideIconImg from './assets/hide.svg'

import styles from './password-form-input.module.scss'

import type { FormInputProps } from 'src/components/Inputs/FormInput/FormInput'

const PasswordFormInput = (props: FormInputProps) => {
  const { className } = props

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const postInputButton = (
    <button
      className={styles.visibilitySwitch}
      type="button"
      aria-label={`${!isPasswordVisible ? 'Show' : 'Hide'} password`}
      onClick={handleToggleVisibility}
    >
      <img
        src={!isPasswordVisible ? showIconImg : hideIconImg}
        alt="show password"
      />
    </button>
  )

  const type = isPasswordVisible ? 'text' : 'password'

  return (
    <FormInput
      {...props}
      className={cx(className, styles.wrapper)}
      type={type}
      postInputButton={postInputButton}
    />
  )
}

export default PasswordFormInput
