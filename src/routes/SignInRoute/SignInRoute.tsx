import { createRoute } from '@tanstack/react-router'
import rootRoute from 'src/routes/RootRoute/RootRoute'

import SingInForm from './SingInForm/SingInForm'

const SignInRoute = () => {
  return (
    <SingInForm />
  )
}

const signInRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sign-in',
    component: SignInRoute,
  })

export default signInRoute