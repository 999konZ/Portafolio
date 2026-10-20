export default function SectionHeading({ id, number, children }) {
  return (
    <h2 id={id} className="section-heading">
      <span className="section-number" aria-hidden="true">{number}</span>
      {children}
    </h2>
  )
}
