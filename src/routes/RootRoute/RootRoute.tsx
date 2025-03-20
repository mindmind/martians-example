import { createRootRoute, Outlet } from '@tanstack/react-router'

import styles from './root-route.module.scss'

const RootRoute = () => {
  return (
    <div className={styles.rootRouteWrapper}>
      <Outlet />
    </div>
  )
}

const rootRoute = createRootRoute({
  component: RootRoute,
})

export default rootRoute
