import { Input } from 'antd'

export default function FormInput({ id, value, onChange, type, multiline, placeholder, autoComplete, error, descriptionId }) {
  let status = ''
  if (error) {
    status = 'error'
  }

  if (multiline) {
    return (
      <Input.TextArea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        rows={5}
        required
        status={status}
        aria-invalid={Boolean(error)}
        aria-describedby={descriptionId}
      />
    )
  }

  return (
    <Input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
      status={status}
      aria-invalid={Boolean(error)}
      aria-describedby={descriptionId}
    />
  )
}
