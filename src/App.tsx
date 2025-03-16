import 'src/styles/variables.scss'
import 'src/styles/main.scss'

import SingInForm from './SingInForm/SingInForm'

import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <SingInForm />
    </div>
  )
}

export default App
