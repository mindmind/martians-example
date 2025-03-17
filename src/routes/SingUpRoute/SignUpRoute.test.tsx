import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@tanstack/react-router', () => ({
  createRoute: vi.fn((config) => config),
}))

vi.mock('src/routes/RootRoute/RootRoute', () => ({
  default: {},
}))

const MockSignUpForm = () => (
  <div data-testid="sign-up-form">Sign Up Form Content</div>
)

vi.mock('./SingUpForm/SingUpForm', () => ({
  default: MockSignUpForm,
}))

const SignUpRoute = () => <MockSignUpForm />

describe('SignUpRoute component', () => {
  it('renders the SignUpForm component', () => {
    render(<SignUpRoute />)

    expect(screen.getByTestId('sign-up-form')).toBeInTheDocument()
    expect(screen.getByText('Sign Up Form Content')).toBeInTheDocument()
  })
})
