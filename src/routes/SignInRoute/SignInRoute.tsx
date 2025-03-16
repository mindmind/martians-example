import { createRoute } from '@tanstack/react-router'
import rootRoute from 'src/routes/RootRoute/RootRoute'

import SingInForm from 'src/components/SingInForm/SingInForm'

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