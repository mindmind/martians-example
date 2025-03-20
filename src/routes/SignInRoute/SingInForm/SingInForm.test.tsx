import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SignInForm from './SingInForm'

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

vi.mock('src/components/AuthForm/AuthForm', () => ({
  default: ({ children, title, submitText }: AuthFormProps) => (
    <div data-testid="auth-form">
      <h1>{title}</h1>
      {children}
      <button>{submitText}</button>
    </div>
  ),
}))

vi.mock('src/components/Inputs/FormInput/FormInput', () => ({
  default: ({ label, placeholder }: FormInputProps) => (
    <div data-testid="email-input">
      <label>{label}</label>
      <input placeholder={placeholder} type="email" />
    </div>
  ),
}))

vi.mock('src/components/Inputs/PasswordFormInput/PasswordFormInput', () => ({
  default: ({ label, placeholder }: FormInputProps) => (
    <div data-testid="password-input">
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

vi.mock('src/hooks/mutations/useSignIn', () => ({
  useSignIn: () => ({
    mutateAsync: vi.fn(),
    isError: false,
    isSuccess: false,
    isPending: false,
    failureReason: null,
  }),
}))

describe('SignInForm component', () => {
  it('renders the form with correct title and submit text', () => {
    render(<SignInForm />)

    expect(screen.getByText('Hello there')).toBeInTheDocument()
    expect(screen.getByText("Let's go")).toBeInTheDocument()
  })

  it('renders email and password inputs with correct labels and placeholders', () => {
    render(<SignInForm />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()

    expect(screen.getByText('Password')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your password'),
    ).toBeInTheDocument()
  })

  it('renders sign up and forgot password links', () => {
    render(<SignInForm />)

    const links = screen.getAllByTestId('auth-form-link')
    expect(links).toHaveLength(2)

    expect(links[0]).toHaveAttribute('href', '/sign-up')
    expect(links[0]).toHaveTextContent("Don't have an account? Sign up")

    expect(links[1]).toHaveAttribute('href', '/forgot')
    expect(links[1]).toHaveTextContent('Forgot password?')
  })
})
