import { useFormContext, Controller } from 'react-hook-form'

import PureInput from '../PureInput/PureInput'

interface FormInputProps {
    name: string
}

const FormInput = (props: FormInputProps) => {
    const { name } = props
    
    const methods = useFormContext()
    
    return (
        <Controller
            name={name}
            control={methods.control}
            render={({ field }) => <PureInput {...field} />}
        />
    )
}

export default FormInput