import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@tanstack/react-router', () => ({
  createRoute: vi.fn((config) => config),
}))

vi.mock('src/routes/RootRoute/RootRoute', () => ({
  default: {},
}))

const MockSignInForm = () => (
  <div data-testid="sign-in-form">Sign In Form Content</div>
)

vi.mock('./SingInForm/SingInForm', () => ({
  default: MockSignInForm,
}))

const SignInRoute = () => <MockSignInForm />

describe('SignInRoute component', () => {
  it('renders the SignInForm component', () => {
    render(<SignInRoute />)

    // Check that the SignInForm is rendered
    expect(screen.getByTestId('sign-in-form')).toBeInTheDocument()
    expect(screen.getByText('Sign In Form Content')).toBeInTheDocument()
  })
})
