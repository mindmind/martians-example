import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FieldError from './FieldError'

describe('FieldError component', () => {
  it('renders children correctly', () => {
    render(<FieldError isHidden={false}>Error message</FieldError>)
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('is visible when isHidden is false', () => {
    render(<FieldError isHidden={false}>Error message</FieldError>)
    const errorElement = screen.getByText('Error message')
    expect(errorElement).not.toHaveClass('isHidden')
  })
})
