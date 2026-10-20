import { useState } from 'react'
import ActionButton from '../atoms/ActionButton.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import FormField from '../molecules/FormField.jsx'
import SocialLinks from '../molecules/SocialLinks.jsx'
import { validateContact } from '../../utils/validateContact.js'

export default function ContactSection({ contact, socialLinks }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [isValidated, setIsValidated] = useState(false)

  function handleNameChange(event) {
    setName(event.target.value)
    setErrors({ ...errors, name: '' })
    setIsValidated(false)
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
    setErrors({ ...errors, email: '' })
    setIsValidated(false)
  }

  function handleMessageChange(event) {
    setMessage(event.target.value)
    setErrors({ ...errors, message: '' })
    setIsValidated(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateContact({ name, email, message })
    setErrors(nextErrors)
    setIsValidated(false)

    if (nextErrors.name) {
      event.currentTarget.elements.namedItem('name').focus()
      return
    }
    if (nextErrors.email) {
      event.currentTarget.elements.namedItem('email').focus()
      return
    }
    if (nextErrors.message) {
      event.currentTarget.elements.namedItem('message').focus()
      return
    }

    setIsValidated(true)
  }

  return (
    <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
      <SectionHeading id="contact-title" number="04">Contacto</SectionHeading>
      <div className="contact-layout">
        <div className="contact-details">
          <h3>Conversemos</h3>
          <p>Puedes encontrar mis redes y datos de contacto en este espacio.</p>
          <SocialLinks links={socialLinks} />
          <p>{contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : 'Correo de contacto pendiente'}</p>
          <p>{contact.location}</p>
        </div>
        <form noValidate onSubmit={handleSubmit} aria-label="Formulario de contacto">
          <FormField
            id="name"
            label="Nombre"
            autoComplete="name"
            value={name}
            onChange={handleNameChange}
            error={errors.name}
            hint="Entre 2 y 80 caracteres."
          />
          <FormField
            id="email"
            label="Correo electrónico"
            type="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            error={errors.email}
            placeholder="nombre@dominio.cl"
          />
          <FormField
            id="message"
            label="Mensaje"
            multiline
            value={message}
            onChange={handleMessageChange}
            error={errors.message}
            hint="Entre 10 y 1000 caracteres."
          />
          {(errors.name || errors.email || errors.message) && (
            <p role="alert" className="form-feedback form-feedback-error">
              Revisa los campos indicados antes de continuar.
            </p>
          )}
          {isValidated && (
            <p role="status" className="form-feedback form-feedback-success">
              Datos validos. Formulario validado correctamente.
            </p>
          )}
          <ActionButton type="primary" htmlType="submit">Enviar</ActionButton>
        </form>
      </div>
    </section>
  )
}
