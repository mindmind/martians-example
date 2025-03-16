import { createRoute } from '@tanstack/react-router'
import rootRoute from 'src/routes/RootRoute/RootRoute'

import SingUpForm from './SingUpForm/SingUpForm'

const SignUpRoute = () => {
  return (
    <SingUpForm />
  )
}

const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sign-up',
    component: SignUpRoute
  })

export default signUpRoute