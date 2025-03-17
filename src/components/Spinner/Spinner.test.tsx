import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Spinner from './Spinner'

describe('Spinner component', () => {
  it('renders with default size', () => {
    const { container } = render(<Spinner />)
    const spinnerElement = container.firstChild as HTMLElement

    expect(spinnerElement).toBeInTheDocument()
    expect(spinnerElement.style.width).toBe('20px')
    expect(spinnerElement.style.height).toBe('20px')
  })

  it('renders with custom size', () => {
    const { container } = render(<Spinner size="40px" />)
    const spinnerElement = container.firstChild as HTMLElement

    expect(spinnerElement).toBeInTheDocument()
    expect(spinnerElement.style.width).toBe('40px')
    expect(spinnerElement.style.height).toBe('40px')
  })
})
