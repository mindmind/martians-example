import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SignUpForm from './SingUpForm'

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
  default: ({ label, placeholder, name }: FormInputProps) => (
    <div data-testid={`form-input-${name}`}>
      <label>{label}</label>
      <input placeholder={placeholder} />
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

vi.mock('./SignUpPasswords/SignUpPasswords', () => ({
  default: () => <div data-testid="signup-passwords">Password Fields</div>,
}))

vi.mock('src/components/AuthForm/AuthFormLink/AuthFormLink', () => ({
  default: ({ children, to }: AuthFormLinkProps) => (
    <a href={to} data-testid="auth-form-link">
      {children}
    </a>
  ),
}))

vi.mock('src/hooks/mutations/useSignUp', () => ({
  useSignUp: () => ({
    mutateAsync: vi.fn(),
    isError: false,
    isSuccess: false,
    isPending: false,
    failureReason: null,
  }),
}))

describe('SignUpForm component', () => {
  it('renders the form with correct title and submit text', () => {
    render(<SignUpForm />)

    expect(screen.getByText('Sign Up')).toBeInTheDocument()
    expect(screen.getByText('Register me')).toBeInTheDocument()
  })

  it('renders first name and last name inputs with correct labels', () => {
    render(<SignUpForm />)

    expect(screen.getByText('First Name')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your first name'),
    ).toBeInTheDocument()

    expect(screen.getByText('Last Name')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your last name'),
    ).toBeInTheDocument()
  })

  it('renders email input with correct label', () => {
    render(<SignUpForm />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders the password fields component', () => {
    render(<SignUpForm />)

    expect(screen.getByTestId('signup-passwords')).toBeInTheDocument()
  })

  it('renders sign in link', () => {
    render(<SignUpForm />)

    const link = screen.getByTestId('auth-form-link')
    expect(link).toHaveAttribute('href', '/sign-in')
    expect(link).toHaveTextContent('Already have account? Sing In')
  })
})
