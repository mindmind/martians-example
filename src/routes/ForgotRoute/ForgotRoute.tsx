import { createRoute } from '@tanstack/react-router'
import rootRoute from 'src/routes/RootRoute/RootRoute'

import ForgotForm from './ForgotForm/ForgotForm'

const ForgotRoute = () => {
  return (
    <ForgotForm />
  )
}

const forgotRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/forgot',
    component: ForgotRoute,
  })

export default forgotRoute