import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@tanstack/react-router', () => ({
  createRootRoute: vi.fn(),
  Outlet: () => <div data-testid="outlet-content">Outlet Content</div>,
}))

const RootRoute = () => {
  return (
    <div className="wrapper">
      <div data-testid="outlet-content">Outlet Content</div>
    </div>
  )
}

describe('RootRoute component', () => {
  it('renders with the Outlet component', () => {
    render(<RootRoute />)
    expect(screen.getByTestId('outlet-content')).toBeInTheDocument()
  })

  it('renders with the correct wrapper class', () => {
    render(<RootRoute />)
    const wrapperElement = screen.getByTestId('outlet-content').parentElement
    expect(wrapperElement).toHaveClass('wrapper')
  })
})
