export default function ExternalLink({ href, children, pendingText = 'Enlace pendiente', accessibleLabel }) {
  if (!href) {
    return <span className="pending-link">{pendingText}</span>
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={accessibleLabel}>
      {children}<span className="sr-only"> (abre en otra pestaña)</span>
    </a>
  )
}
