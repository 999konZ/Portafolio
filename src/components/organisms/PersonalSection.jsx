import ActionButton from '../atoms/ActionButton.jsx'

export default function PersonalSection({ profile }) {
  return (
    <section id="personal" className="personal-section" aria-labelledby="personal-title">
      <div className="personal-layout">
        <div>
          <h1 id="personal-title">{profile.name}</h1>
          <p className="profile-role">{profile.role}</p>
          <p className="profile-description">{profile.description}</p>
          <div className="hero-actions">
            <ActionButton type="primary" href="#proyectos">Ver proyectos</ActionButton>
            <ActionButton href="#contacto">Contactar</ActionButton>
          </div>
        </div>
        <img className="profile-avatar" src={profile.fotoPerfil} alt={profile.avatarAlt} width="240" height="240" />
      </div>
    </section>
  )
}
