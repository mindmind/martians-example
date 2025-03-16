import { redirect } from '@tanstack/react-router'

import rootRoute from 'src/routes/RootRoute/RootRoute'
import signInRoute from 'src/routes/SignInRoute/SignInRoute'
import signUpRoute from 'src/routes/SingUpRoute/SignUpRoute'
import forgotRoute from './routes/ForgotRoute/ForgotRoute'

import { createRouter, createRoute } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({
      to: '/sign-in'
    })
  }
})

const routeTree = rootRoute.addChildren([indexRoute, signUpRoute, signInRoute, forgotRoute])

const router = createRouter({ routeTree })
  
export default router