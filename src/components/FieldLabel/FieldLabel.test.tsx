import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FieldLabel from './FieldLabel'

describe('FieldLabel component', () => {
  it('renders children correctly', () => {
    render(<FieldLabel>Label Text</FieldLabel>)
    expect(screen.getByText('Label Text')).toBeInTheDocument()
  })

  it('sets htmlFor attribute when provided', () => {
    render(<FieldLabel htmlFor="test-input">Label Text</FieldLabel>)
    const label = screen.getByText('Label Text')
    expect(label).toHaveAttribute('for', 'test-input')
  })
})
