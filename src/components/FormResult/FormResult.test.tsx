import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FormResult from './FormResult'

describe('FormResult component', () => {
  it('renders children correctly', () => {
    render(<FormResult>Result message</FormResult>)
    expect(screen.getByText('Result message')).toBeInTheDocument()
  })
})
