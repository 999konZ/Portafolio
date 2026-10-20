import { StrictMode } from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PortfolioPage from '../pages/PortfolioPage.jsx'
import { portfolioData } from '../data/portfolio.js'

describe('Página y organismos principales', () => {
  it('muestra las seis secciones, sus datos y el avatar', () => {
    render(<PortfolioPage />)

    for (const name of [portfolioData.profile.name, 'Experiencia laboral', 'Estudios', 'Desarrollos y proyectos', 'Contacto']) {
      expect(screen.getByRole('region', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('img', { name: portfolioData.profile.avatarAlt })).toBeVisible()
    for (const experience of portfolioData.experiencia) {
      expect(within(screen.getByRole('region', { name: 'Experiencia laboral' })).getByRole('heading', { name: experience.title })).toBeInTheDocument()
    }
    for (const education of portfolioData.educacion) {
      expect(within(screen.getByRole('region', { name: 'Estudios' })).getByRole('heading', { name: education.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('contentinfo')).toHaveTextContent(`© ${new Date().getFullYear()} ${portfolioData.profile.name}`)
    expect(screen.getByRole('contentinfo')).toHaveTextContent(portfolioData.contacto.email || 'Correo de contacto pendiente')
  })

  it('conecta todos los enlaces de navegación con secciones existentes', () => {
    render(<PortfolioPage />)
    const navigation = screen.getByRole('navigation', { name: 'Navegación principal' })
    const links = within(navigation).getAllByRole('link')

    expect(links).toHaveLength(5)
    for (const link of links) {
      const target = document.getElementById(link.getAttribute('href').slice(1))
      expect(target).toHaveAttribute('aria-labelledby')
    }
    expect(screen.getByRole('link', { name: 'Saltar al contenido' })).toHaveAttribute('href', '#contenido')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'contenido')
  })

  it('sincroniza el título con el nombre y lo restaura al desmontar, incluso en StrictMode', () => {
    document.title = 'Título anterior'
    const { rerender, unmount } = render(<StrictMode><PortfolioPage /></StrictMode>)
    expect(document.title).toBe(`${portfolioData.profile.name} | Portafolio`)

    const updatedData = { ...portfolioData, profile: { ...portfolioData.profile, name: 'Nombre de prueba' } }
    rerender(<StrictMode><PortfolioPage data={updatedData} /></StrictMode>)
    expect(document.title).toBe('Nombre de prueba | Portafolio')
    unmount()
    expect(document.title).toBe('Título anterior')
  })

  it('admite listas vacías sin dejar la página rota', () => {
    const data = { ...portfolioData, experiencia: [], educacion: [], proyectos: [] }
    render(<PortfolioPage data={data} />)

    expect(screen.getByText('Aún no hay experiencia laboral registrada.')).toBeInTheDocument()
    expect(screen.getByText('Aún no hay estudios registrados.')).toBeInTheDocument()
    expect(screen.getByText('No hay proyectos para mostrar.')).toBeInTheDocument()
  })

  it('activa redes y correo al reemplazar los datos pendientes', () => {
    const data = {
      ...portfolioData,
      contacto: { email: 'prueba@example.com', location: 'Ubicación de prueba' },
      socialLinks: [
        { id: 'github', label: 'GitHub', url: 'https://github.com/perfil-de-prueba' },
        { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/perfil-de-prueba' },
      ],
    }
    render(<PortfolioPage data={data} />)

    for (const link of data.socialLinks) {
      const element = screen.getByRole('link', { name: new RegExp(link.label) })
      expect(element).toHaveAttribute('href', link.url)
      expect(element).toHaveAttribute('rel', 'noopener noreferrer')
    }
    for (const link of screen.getAllByRole('link', { name: 'prueba@example.com' })) {
      expect(link).toHaveAttribute('href', 'mailto:prueba@example.com')
    }
  })
})
