// import { describe, it, expect, vi } from 'vitest'
// import { render, screen, fireEvent, waitFor } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import SingInForm from './SingInForm'

// describe('SingInForm', () => {
//   it('renders form with title, inputs and submit button', () => {
//     render(<SingInForm />)
    
//     expect(screen.getByText('Hello there')).toBeInTheDocument()
    
//     expect(screen.getByLabelText('Email')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    
//     expect(screen.getByLabelText('Password')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument()
    
//     expect(screen.getByRole('button', { name: "Let's go" })).toBeInTheDocument()
//   })
  
//   it('shows validation errors when submitting empty form', async () => {
//     render(<SingInForm />)
    
//     const submitButton = screen.getByRole('button', { name: "Let's go" })
//     fireEvent.click(submitButton)
    
//     await waitFor(() => {
//       const emailInput = screen.getByLabelText('Email')
//       expect(emailInput).toBeInvalid()
      
//       const passwordInput = screen.getByLabelText('Password')
//       expect(passwordInput).toBeInvalid()
//     })
//   })
  
//   it('calls handleSubmit when form is submitted with valid inputs', async () => {
//     const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    
//     render(<SingInForm />)
    
//     const emailInput = screen.getByLabelText('Email')
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    
//     const passwordInput = screen.getByLabelText('Password')
//     fireEvent.change(passwordInput, { target: { value: 'password123' } })
    
//     const submitButton = screen.getByRole('button', { name: "Let's go" })
//     fireEvent.click(submitButton)
    
//     await waitFor(() => {
//       expect(alertMock).toHaveBeenCalledWith('here we go')
//     })
    
//     alertMock.mockRestore()
//   })
// }) 