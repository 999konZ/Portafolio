import { useState } from 'react'
import ActionButton from '../atoms/ActionButton.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ProjectCard from '../molecules/ProjectCard.jsx'

export default function ProjectsSection({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = []
  for (const project of projects) {
    if (!categories.includes(project.category)) {
      categories.push(project.category)
    }
  }

  let visibleProjects = projects
  if (selectedCategory !== '') {
    visibleProjects = projects.filter((project) => project.category === selectedCategory)
  }

  return (
    <section id="proyectos" className="section projects-section" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" number="03">Desarrollos y proyectos</SectionHeading>
      <p className="section-intro">Proyectos realizados y por hacer.</p>
      {projects.length > 0 && (
        <div className="project-filters" role="group" aria-label="Filtrar proyectos por categoría">
          <ActionButton
            type={selectedCategory === '' ? 'primary' : 'default'}
            pressed={selectedCategory === ''}
            onClick={() => setSelectedCategory('')}
          >Todos</ActionButton>
          {categories.map((category) => (
            <ActionButton
              key={category}
              type={selectedCategory === category ? 'primary' : 'default'}
              pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >{category}</ActionButton>
          ))}
        </div>
      )}
      <p className="results-count" role="status">Proyectos mostrados: {visibleProjects.length}</p>
      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : <p className="empty-state">No hay proyectos para mostrar.</p>}
    </section>
  )
}
