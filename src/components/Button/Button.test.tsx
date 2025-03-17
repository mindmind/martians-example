import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Button from './Button'

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders with default type button', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('renders with submit type when specified', () => {
    render(<Button type="submit">Submit</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders spinner when loading', () => {
    render(<Button isLoading>Click me</Button>)
    expect(screen.queryByText('Click me')).not.toBeInTheDocument()
    // Check for spinner component (it would have specific testid or role in a real implementation)
    expect(document.querySelector('[class*="spinner"]')).toBeInTheDocument()
  })

  it('is disabled when loading', () => {
    render(<Button isLoading>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
