import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import ProjectsSection from '../components/organisms/ProjectsSection.jsx'

const proyectosDePrueba = [
  {
    id: 'prueba-react',
    title: 'Proyecto React de prueba',
    description: 'Proyecto para comprobar el filtro React.',
    category: 'React',
    image: '/DecoHogarIcon.png',
    imageAlt: 'Imagen del proyecto React de prueba',
    repositoryUrl: '',
  },
  {
    id: 'prueba-kotlin',
    title: 'Proyecto Kotlin de prueba',
    description: 'Proyecto para comprobar el filtro Kotlin.',
    category: 'Kotlin',
    image: '/AppIcon.png',
    imageAlt: 'Imagen del proyecto Kotlin de prueba',
    repositoryUrl: '',
  },
]

describe('Galería de proyectos', () => {
  it('filtra por categoría y permite volver a todos sin cambiar los datos originales', async () => {
    const user = userEvent.setup()
    const datosOriginales = proyectosDePrueba.map((project) => ({ ...project }))
    render(<ProjectsSection projects={proyectosDePrueba} />)
    expect(screen.getAllByRole('article')).toHaveLength(2)

    const reactFilter = screen.getByRole('button', { name: 'React', exact: true })
    await user.click(reactFilter)
    expect(reactFilter).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(screen.getByRole('heading', { name: 'Proyecto React de prueba' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Proyecto Kotlin de prueba' })).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Proyectos mostrados: 1')

    await user.click(screen.getByRole('button', { name: 'Todos' }))
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(proyectosDePrueba).toEqual(datosOriginales)
  })

  it('muestra previsualizaciones y señala repositorios pendientes sin inventar enlaces', () => {
    render(<ProjectsSection projects={proyectosDePrueba} />)
    for (const project of proyectosDePrueba) {
      const card = screen.getByRole('article', { name: project.title })
      const image = within(card).getByRole('img', { name: project.imageAlt })
      expect(image).toHaveAttribute('src', project.image)
      expect(within(card).getByText('Repositorio de GitHub pendiente')).toBeInTheDocument()
      expect(within(card).queryByRole('link')).not.toBeInTheDocument()
    }
  })

  it('muestra el enlace del repositorio cuando se proporciona', () => {
    const project = { ...proyectosDePrueba[0], repositoryUrl: 'https://github.com/ejemplo/proyecto' }
    render(<ProjectsSection projects={[project]} />)
    const link = screen.getByRole('link', { name: /Ver repositorio/ })
    expect(link).toHaveAttribute('href', project.repositoryUrl)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('explica la ausencia de proyectos y oculta filtros innecesarios', () => {
    render(<ProjectsSection projects={[]} />)
    expect(screen.getByText('No hay proyectos para mostrar.')).toBeInTheDocument()
    expect(screen.queryByRole('group', { name: /Filtrar proyectos/ })).not.toBeInTheDocument()
  })
})
