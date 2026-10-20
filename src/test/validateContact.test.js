import { describe, expect, it } from 'vitest'
import { validateContact } from '../utils/validateContact.js'

const validValues = { name: 'Ana Pérez', email: 'ana@example.com', message: 'Mensaje válido de prueba.' }

describe('Reglas de validación', () => {
  it('acepta datos válidos y espacios exteriores sin modificar los valores recibidos', () => {
    const values = { name: '  Ana  ', email: ' ana@example.com ', message: '  Hola, quiero contactarte.  ' }
    const original = { ...values }
    expect(validateContact(values)).toEqual({})
    expect(values).toEqual(original)
  })

  it.each([
    ['name', ' '], ['name', 'A'], ['name', 'a'.repeat(81)],
    ['email', 'sin-arroba.cl'], ['email', 'a@@dominio.cl'], ['email', 'a@dominio'],
    ['email', 'a b@dominio.cl'], ['email', 'a@dominio..cl'], ['email', 'a'.repeat(250) + '@test.cl'],
    ['message', '         '], ['message', 'Corto'], ['message', 'a'.repeat(1001)],
  ])('rechaza un valor inválido en %s', (field, value) => {
    expect(validateContact({ ...validValues, [field]: value })).toHaveProperty(field)
  })

  it('acepta los límites de longitud definidos', () => {
    expect(validateContact({ name: 'Ab', email: 'a+b@test.cl', message: 'a'.repeat(10) })).toEqual({})
    expect(validateContact({ ...validValues, name: 'a'.repeat(80), message: 'a'.repeat(1000) })).toEqual({})
  })
})
