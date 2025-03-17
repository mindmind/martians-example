import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import PureInput from './PureInput'

describe('PureInput component', () => {
  const defaultProps = {
    name: 'test-input',
    value: '',
    onChange: vi.fn(),
  }

  it('renders with default type', () => {
    render(<PureInput {...defaultProps} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders with specified type', () => {
    render(<PureInput {...defaultProps} type="password" />)
    const input = screen.getByTestId('test-input')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders with placeholder when provided', () => {
    render(<PureInput {...defaultProps} placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders with correct value', () => {
    render(<PureInput {...defaultProps} value="test value" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('test value')
  })

  it('calls onChange when input value changes', () => {
    const handleChange = vi.fn()
    render(<PureInput {...defaultProps} onChange={handleChange} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'new value' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('applies invalid style when isInvalid is true', () => {
    render(<PureInput {...defaultProps} isInvalid />)
    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'true')
  })
})
