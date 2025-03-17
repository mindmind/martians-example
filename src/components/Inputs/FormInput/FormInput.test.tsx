import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from './FormInput'

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('FormInput component', () => {
  it('renders with label when provided', () => {
    render(
      <FormWrapper>
        <FormInput name="test" label="Test Label" />
      </FormWrapper>,
    )

    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders without label when not provided', () => {
    render(
      <FormWrapper>
        <FormInput name="test" />
      </FormWrapper>,
    )

    expect(screen.queryByText('Test Label')).not.toBeInTheDocument()
  })

  it('renders with placeholder when provided', () => {
    render(
      <FormWrapper>
        <FormInput name="test" placeholder="Test Placeholder" />
      </FormWrapper>,
    )

    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument()
  })

  it('renders with correct input type', () => {
    render(
      <FormWrapper>
        <FormInput name="test" type="password" />
      </FormWrapper>,
    )

    expect(screen.getByTestId('test')).toHaveAttribute('type', 'password')
  })

  it('renders with post input button when provided', () => {
    render(
      <FormWrapper>
        <FormInput
          name="test"
          postInputButton={<button data-testid="post-button">Click</button>}
        />
      </FormWrapper>,
    )

    expect(screen.getByTestId('post-button')).toBeInTheDocument()
  })
})
