import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormProvider, useForm } from 'react-hook-form'
import PasswordFormInput from './PasswordFormInput'

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('PasswordFormInput component', () => {
  it('renders with password type by default', () => {
    render(
      <FormWrapper>
        <PasswordFormInput name="password" />
      </FormWrapper>,
    )

    const input = screen.getByTestId('password')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders with visibility toggle button', () => {
    render(
      <FormWrapper>
        <PasswordFormInput name="password" />
      </FormWrapper>,
    )

    const toggleButton = screen.getByAltText('show password')
    expect(toggleButton).toBeInTheDocument()
  })

  it('toggles password visibility when button is clicked', () => {
    render(
      <FormWrapper>
        <PasswordFormInput name="password" />
      </FormWrapper>,
    )

    const input = screen.getByTestId('password')
    expect(input).toHaveAttribute('type', 'password')

    const toggleButton = screen.getByAltText('show password')
    fireEvent.click(toggleButton)

    expect(input).toHaveAttribute('type', 'text')

    // Toggle back
    fireEvent.click(toggleButton)
    expect(input).toHaveAttribute('type', 'password')
  })

  it('passes props to FormInput', () => {
    render(
      <FormWrapper>
        <PasswordFormInput
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
      </FormWrapper>,
    )

    expect(screen.getByText('Password')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your password'),
    ).toBeInTheDocument()
  })
})
