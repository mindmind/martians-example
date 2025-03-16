import FormInput from 'src/components/Inputs/FormInput/FormInput'

import type { FormInputProps } from 'src/components/Inputs/FormInput/FormInput'

const EmailFormInput = (props: FormInputProps) => {
  const rules = {
    ...props.rules || {},
    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email' }
  }

  return (
    <FormInput {...props} type="email" rules={rules} />
  )
}

export default EmailFormInput