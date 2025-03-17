import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ForgotForm from './ForgotForm'

interface AuthFormProps {
  children: React.ReactNode
  title: string
  submitText: string
  isError?: boolean
  isSuccess?: boolean
  isLoading?: boolean
  errorMessage?: string
  onSubmit: (data: unknown) => void
}

interface FormInputProps {
  label?: string
  placeholder?: string
  name?: string
  rules?: Record<string, unknown>
}

interface AuthFormLinkProps {
  children: React.ReactNode
  to: string
}

// Mock the dependencies
vi.mock('src/components/AuthForm/AuthForm', () => ({
  default: ({ children, title, submitText }: AuthFormProps) => (
    <div data-testid="auth-form">
      <h1>{title}</h1>
      {children}
      <button>{submitText}</button>
    </div>
  ),
}))

vi.mock('src/components/Inputs/EmailFormInput/EmailFormInput', () => ({
  default: ({ label, placeholder }: FormInputProps) => (
    <div data-testid="email-input">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  ),
}))

vi.mock('src/components/AuthForm/AuthFormLink/AuthFormLink', () => ({
  default: ({ children, to }: AuthFormLinkProps) => (
    <a href={to} data-testid="auth-form-link">
      {children}
    </a>
  ),
}))

vi.mock('src/hooks/mutations/useResetPassword', () => ({
  useResetPassword: () => ({
    mutateAsync: vi.fn(),
    isError: false,
    isSuccess: false,
    isPending: false,
    failureReason: null,
  }),
}))

describe('ForgotForm component', () => {
  it('renders the form with correct title and submit text', () => {
    render(<ForgotForm />)

    expect(screen.getByText('Reset password')).toBeInTheDocument()
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })

  it('renders email input with correct label and placeholder', () => {
    render(<ForgotForm />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders sign in link', () => {
    render(<ForgotForm />)

    const link = screen.getByTestId('auth-form-link')
    expect(link).toHaveAttribute('href', '/sign-in')
    expect(link).toHaveTextContent('Try to sign in again')
  })
})
