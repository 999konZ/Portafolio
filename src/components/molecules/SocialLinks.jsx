import ExternalLink from '../atoms/ExternalLink.jsx'

export default function SocialLinks({ links }) {
  return (
    <ul className="social-links" aria-label="Redes sociales">
      {links.map((link) => (
        <li key={link.id}>
          <ExternalLink href={link.url} pendingText={`${link.label}: enlace pendiente`}>
            {link.label} <span aria-hidden="true">↗</span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
