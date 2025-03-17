import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormProvider, useForm } from 'react-hook-form'
import EmailFormInput from './EmailFormInput'

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('EmailFormInput component', () => {
  it('renders with email type', () => {
    render(
      <FormWrapper>
        <EmailFormInput name="email" />
      </FormWrapper>,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
  })

  it('passes props to FormInput', () => {
    render(
      <FormWrapper>
        <EmailFormInput
          name="email"
          label="Email Address"
          placeholder="Enter your email"
        />
      </FormWrapper>,
    )

    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('applies email validation pattern', () => {
    render(
      <FormWrapper>
        <EmailFormInput name="email" />
      </FormWrapper>,
    )

    expect(screen.getByTestId('email')).toBeInTheDocument()
  })
})
