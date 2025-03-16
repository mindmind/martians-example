import { useFormContext, useController } from 'react-hook-form'

import PureInput from 'src/components/Inputs/PureInput/PureInput'
import BasicLabel from 'src/components/BasicLabel/BasicLabel'
import BasicError from 'src/components/BasicError/BasicError'

import styles from './form-input.module.scss'

interface FormInputProps {
    name: string
    type?: React.HTMLInputTypeAttribute
    label?: string
    placeholder?: string
    required?: boolean
}

const FormInput = (props: FormInputProps) => {
    const { 
        name,
        type = 'text',
        label,
        placeholder,
        required
    } = props
    
    const methods = useFormContext()

    const { field, fieldState } = useController({
        name,
        control: methods.control,
        rules: { required: required ? 'required field' : undefined }
    })

    return (
        <div className={styles.wrapper}>
            {label ? <BasicLabel htmlFor={name}>{label}</BasicLabel> : null}

            <div>
            <PureInput {...field} type={type} placeholder={placeholder} isInvalid={Boolean(fieldState.error)} />
            </div>
            
            {fieldState.error ? <BasicError>{fieldState.error.message || 'unknown error'}</BasicError> : null}
        </div>
    )
}

export default FormInput