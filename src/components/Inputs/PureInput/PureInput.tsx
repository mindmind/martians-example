interface PureInputProps {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PureInput = (props: PureInputProps) => {
  const { value = '' } = props
  
  return (
    <input {...props} value={value} />
  )
}

export default PureInput