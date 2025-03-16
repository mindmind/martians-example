import { useFormContext, useController } from 'react-hook-form'
import cx from 'classnames'

import PureInput from 'src/components/Inputs/PureInput/PureInput'
import BasicLabel from 'src/components/BasicLabel/BasicLabel'
import BasicError from 'src/components/BasicError/BasicError'

import styles from './form-input.module.scss'

export interface FormInputProps {
    className?: string
    name: string
    type?: React.HTMLInputTypeAttribute
    label?: string
    placeholder?: string
    rules?: { 
        required?: string
        pattern?: { value: RegExp, message: string } 
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
        postInputButton
    } = props
    
    const methods = useFormContext()

    const { field, fieldState } = useController({
        name,
        control: methods.control,
        rules
    })

    const error = fieldState.invalid ? (fieldState.error?.message ?? 'unknown error') : '\u00A0'

    return (
        <div className={cx(styles.wrapper, className)}>
            {label ? <BasicLabel htmlFor={name}>{label}</BasicLabel> : null}

            <div className={styles.inner}>
                <PureInput 
                    {...field}
                    className={cx(styles.input, Boolean(postInputButton) && styles.withPostInputButton)} 
                    type={type} 
                    placeholder={placeholder} 
                    isInvalid={Boolean(fieldState.error)} 
                />

                {postInputButton ?
                    <div className={styles.postInputButtonWrapper}>
                        {postInputButton}
                    </div>
                    : null
                }
            </div>

            <BasicError isHidden={!error}>{error}</BasicError>
        </div>
    )
}

export default FormInput