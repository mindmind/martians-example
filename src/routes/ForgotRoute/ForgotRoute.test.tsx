import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@tanstack/react-router', () => ({
  createRoute: vi.fn((config) => config),
}))

vi.mock('src/routes/RootRoute/RootRoute', () => ({
  default: {},
}))

const MockForgotForm = () => (
  <div data-testid="forgot-form">Forgot Password Form Content</div>
)

vi.mock('./ForgotForm/ForgotForm', () => ({
  default: MockForgotForm,
}))

const ForgotRoute = () => <MockForgotForm />

describe('ForgotRoute component', () => {
  it('renders the ForgotForm component', () => {
    render(<ForgotRoute />)

    expect(screen.getByTestId('forgot-form')).toBeInTheDocument()
    expect(screen.getByText('Forgot Password Form Content')).toBeInTheDocument()
  })
})
