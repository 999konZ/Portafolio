export function validateContact(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (name.length < 2 || name.length > 80) {
    errors.name = 'Escribe un nombre de entre 2 y 80 caracteres.'
  }

  const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/
  if (email.length > 254 || !emailPattern.test(email)) {
    errors.email = 'Escribe un correo válido, por ejemplo nombre@dominio.cl.'
  }

  if (message.length < 10 || message.length > 1000) {
    errors.message = 'Escribe un mensaje de entre 10 y 1000 caracteres.'
  }

  return errors
}
