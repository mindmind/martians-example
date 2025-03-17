import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AuthForm from './AuthForm'

describe('AuthForm component', () => {
  const mockSubmit = vi.fn()
  const defaultProps = {
    title: 'Test Form',
    submitText: 'Submit',
    onSubmit: mockSubmit,
  }

  it('renders the title correctly', () => {
    render(<AuthForm {...defaultProps} />)
    expect(screen.getByText('Test Form')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <AuthForm {...defaultProps}>
        <div data-testid="form-content">Form content</div>
      </AuthForm>,
    )
    expect(screen.getByTestId('form-content')).toBeInTheDocument()
  })

  it('renders submit button with correct text', () => {
    render(<AuthForm {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('shows error message when isError is true', () => {
    render(
      <AuthForm
        {...defaultProps}
        isError
        errorMessage="Custom error message"
      />,
    )
    expect(screen.getByText('Custom error message')).toBeInTheDocument()
  })

  it('shows success message when isSuccess is true', () => {
    render(<AuthForm {...defaultProps} isSuccess />)
    expect(
      screen.getByText('The request is successful. Everything is fine.'),
    ).toBeInTheDocument()
  })

  it('does not show error or success message by default', () => {
    render(<AuthForm {...defaultProps} />)
    expect(
      screen.queryByText('The request is successful. Everything is fine.'),
    ).not.toBeInTheDocument()
    expect(screen.queryByText('unknown error')).not.toBeInTheDocument()
  })

  it('renders loading state in button when isLoading is true', () => {
    render(<AuthForm {...defaultProps} isLoading />)
    expect(document.querySelector('[class*="spinner"]')).toBeInTheDocument()
    expect(screen.queryByText('Submit')).not.toBeInTheDocument()
  })
})
