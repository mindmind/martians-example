import './App.css'

import Form from 'src/components/Form/Form'
import FormInput from './components/Inputs/FormInput/FormInput'

const App = () => {
  const handleSubmit = () => {
    alert('here we go')
  }

  return (
    <Form debug onSubmit={handleSubmit}>
      <FormInput name="email" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default App
