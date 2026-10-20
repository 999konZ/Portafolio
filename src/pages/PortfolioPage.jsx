import { useEffect } from 'react'
import { portfolioData } from '../data/portfolio.js'
import Navbar from '../components/organisms/Navbar.jsx'
import PersonalSection from '../components/organisms/PersonalSection.jsx'
import ExperienceSection from '../components/organisms/ExperienceSection.jsx'
import EducationSection from '../components/organisms/EducationSection.jsx'
import ProjectsSection from '../components/organisms/ProjectsSection.jsx'
import ContactSection from '../components/organisms/ContactSection.jsx'
import Footer from '../components/organisms/Footer.jsx'
import PortfolioTemplate from '../components/templates/PortfolioTemplate.jsx'

export default function PortfolioPage({ data = portfolioData }) {
  const { profile, experiencia, educacion, proyectos, socialLinks, contacto } = data

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${profile.name} | Portafolio`
    return () => { document.title = previousTitle }
  }, [profile.name])

  return (
    <PortfolioTemplate
      navigation={<Navbar />}
      personal={<PersonalSection profile={profile} />}
      experience={<ExperienceSection experience={experiencia} />}
      education={<EducationSection education={educacion} />}
      projects={<ProjectsSection projects={proyectos} />}
      contact={<ContactSection contact={contacto} socialLinks={socialLinks} />}
      footer={<Footer name={profile.name} contact={contacto} />}
    />
  )
}
