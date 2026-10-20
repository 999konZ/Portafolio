import { Card } from 'antd'
import ExternalLink from '../atoms/ExternalLink.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-labelledby={`project-${project.id}`}>
      <Card cover={<img src={project.image} alt={project.imageAlt} width="640" height="360" loading="lazy" />}>
        <span className="category-label">{project.category}</span>
        <h3 id={`project-${project.id}`}>{project.title}</h3>
        <p>{project.description}</p>
        <ExternalLink
          href={project.repositoryUrl}
          pendingText="Repositorio de GitHub pendiente"
          accessibleLabel={`Ver repositorio de ${project.title} (abre en otra pestaña)`}
        >
          Ver repositorio <span aria-hidden="true">↗</span>
        </ExternalLink>
      </Card>
    </article>
  )
}
