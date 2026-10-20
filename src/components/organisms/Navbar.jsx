const navigation = [
  { id: 'personal', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'estudios', label: 'Estudios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="page-container navbar">
        <nav aria-label="Navegación principal">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
