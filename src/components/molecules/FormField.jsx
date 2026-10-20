import FormInput from '../atoms/FormInput.jsx'

export default function FormField({ id, label, error, hint, value, onChange, type = 'text', multiline = false, placeholder, autoComplete }) {
  let descriptionId = ''
  if (hint) {
    descriptionId = `${id}-hint`
  }
  if (error) {
    descriptionId = `${descriptionId} ${id}-error`.trim()
  }

  return (
    <div className="form-field">
      <label htmlFor={id}>{label} <span className="field-required">(obligatorio)</span></label>
      {hint && <p id={`${id}-hint`} className="field-hint">{hint}</p>}
      <FormInput
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        multiline={multiline}
        placeholder={placeholder}
        autoComplete={autoComplete}
        error={error}
        descriptionId={descriptionId}
      />
      {error && <p id={`${id}-error`} className="field-error">{error}</p>}
    </div>
  )
}
