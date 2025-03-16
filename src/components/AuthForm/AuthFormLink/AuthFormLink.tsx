import { Link } from '@tanstack/react-router'

import styles from './auth-form-link.module.scss'

interface AuthFormLinkProps {
    to: string
}

const AuthFormLink = (props: React.PropsWithChildren<AuthFormLinkProps>) => {
  const { to, children } = props

  return (
    <Link className={styles.link} to={to}>{children}</Link>
  )
}

export default AuthFormLink