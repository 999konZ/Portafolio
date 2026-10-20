import SectionHeading from '../atoms/SectionHeading.jsx'
import TimelineCard from '../molecules/TimelineCard.jsx'

export default function EducationSection({ education }) {
  return (
    <section id="estudios" className="section" aria-labelledby="education-title">
      <SectionHeading id="education-title" number="02">Estudios</SectionHeading>
      {education.length === 0 ? <p className="empty-state">Aún no hay estudios registrados.</p> : (
        <ol className="timeline-list">
          {education.map((item) => <li key={item.id}><TimelineCard item={item} /></li>)}
        </ol>
      )}
    </section>
  )
}
