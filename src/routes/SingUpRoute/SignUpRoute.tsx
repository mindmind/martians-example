import { createRoute } from '@tanstack/react-router'
import rootRoute from 'src/routes/RootRoute/RootRoute'

import SingInForm from 'src/components/SingInForm/SingInForm'

const SignUpRoute = () => {
  return (
    <SingInForm />
  )
}

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sign-up',
    component: SignUpRoute
  })

export default signUpRoute