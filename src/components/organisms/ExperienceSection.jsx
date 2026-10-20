import SectionHeading from '../atoms/SectionHeading.jsx'
import TimelineCard from '../molecules/TimelineCard.jsx'

export default function ExperienceSection({ experience }) {
  return (
    <section id="experiencia" className="section" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" number="01">Experiencia laboral</SectionHeading>
      {experience.length === 0 ? <p className="empty-state">Aún no hay experiencia laboral registrada.</p> : (
        <ol className="timeline-list">
          {experience.map((item) => <li key={item.id}><TimelineCard item={item} /></li>)}
        </ol>
      )}
    </section>
  )
}
