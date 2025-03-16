import { FormProvider, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import type { FieldValues, SubmitHandler } from 'react-hook-form'

interface FormProps<T extends FieldValues> {
    className?: string
    debug?: boolean
    onSubmit: SubmitHandler<T>
}

const Form = <T extends FieldValues,>(props: React.PropsWithChildren<FormProps<T>>) => {
  const { className, debug, onSubmit, children } = props

  const methods = useForm<T>()

  return (
    <>
        <FormProvider {...methods}>
            <form className={className} noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>

        {debug ?
         <DevTool control={methods.control} />
        : null}
    </>
  )
}

export default Form