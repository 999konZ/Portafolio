import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import ContactSection from '../components/organisms/ContactSection.jsx'
import { portfolioData } from '../data/portfolio.js'

function setupForm() {
  const user = userEvent.setup()
  render(<ContactSection contact={portfolioData.contacto} socialLinks={portfolioData.socialLinks} />)
  return {
    user,
    name: screen.getByRole('textbox', { name: /Nombre/ }),
    email: screen.getByRole('textbox', { name: /Correo electrónico/ }),
    message: screen.getByRole('textbox', { name: /Mensaje/ }),
    submit: screen.getByRole('button', { name: 'Enviar', exact: true }),
  }
}

describe('Formulario de contacto', () => {
  it('muestra el formulario y los campos obligatorios', () => {
    const form = setupForm()
    expect(screen.getByRole('form', { name: 'Formulario de contacto' })).toBeInTheDocument()
    for (const input of [form.name, form.email, form.message]) {
      expect(input).toBeRequired()
      expect(input).toHaveAttribute('aria-invalid', 'false')
    }
  })

  it('rechaza campos vacíos, asocia los errores y enfoca el primero', async () => {
    const form = setupForm()
    await form.user.click(form.submit)

    expect(screen.getByRole('alert')).toHaveTextContent('Revisa los campos indicados')
    expect(form.name).toHaveFocus()
    for (const input of [form.name, form.email, form.message]) {
      expect(input).toHaveAttribute('aria-invalid', 'true')
      expect(input).toHaveAccessibleDescription(expect.stringContaining('Escribe'))
    }
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rechaza un correo mal formado y un mensaje demasiado corto', async () => {
    const form = setupForm()
    await form.user.type(form.name, 'Nombre de prueba')
    await form.user.type(form.email, 'correo@dominio')
    await form.user.type(form.message, 'Hola')
    await form.user.click(form.submit)

    expect(form.name).toHaveAttribute('aria-invalid', 'false')
    expect(form.email).toHaveFocus()
    expect(form.email).toHaveAttribute('aria-invalid', 'true')
    expect(form.message).toHaveAttribute('aria-invalid', 'true')
  })

  it('permite corregir errores y confirma datos válidos sin afirmar que envió un correo', async () => {
    const form = setupForm()
    await form.user.click(form.submit)
    await form.user.type(form.name, 'Ana Pérez')
    await form.user.type(form.email, 'ana@example.com')
    await form.user.type(form.message, 'Quisiera conocer más detalles de tus proyectos.')
    await form.user.click(form.submit)

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Datos válidos. Formulario validado correctamente.')
    expect(form.message).toHaveValue('Quisiera conocer más detalles de tus proyectos.')

    await form.user.type(form.message, ' Gracias.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('permite validar con el teclado desde el campo de correo', async () => {
    const form = setupForm()
    await form.user.type(form.name, 'Ana Pérez')
    await form.user.type(form.message, 'Este es un mensaje de prueba válido.')
    await form.user.type(form.email, 'ana@example.com{Enter}')
    expect(screen.getByRole('status')).toHaveTextContent('Datos válidos')
  })
})
