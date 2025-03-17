import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Form from './Form'

describe('Form component', () => {
  it('renders children correctly', () => {
    render(
      <Form onSubmit={() => {}}>
        <div data-testid="form-child">Child component</div>
      </Form>,
    )

    expect(screen.getByTestId('form-child')).toBeInTheDocument()
    expect(screen.getByText('Child component')).toBeInTheDocument()
  })

  it('calls onSubmit handler when form is submitted', async () => {
    const mockSubmit = vi.fn()

    render(
      <Form onSubmit={mockSubmit}>
        <button type="submit" data-testid="submit-button">
          Submit
        </button>
      </Form>,
    )

    const submitButton = screen.getByTestId('submit-button')
    await userEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
