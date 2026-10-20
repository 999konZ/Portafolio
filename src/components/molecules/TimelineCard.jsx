import { Card } from 'antd'

export default function TimelineCard({ item }) {
  return (
    <Card className="timeline-card">
      <p className="timeline-dates">{item.start} — {item.end}</p>
      <h3>{item.title}</h3>
      <p className="organization">{item.organization}</p>
      <p>{item.description}</p>
    </Card>
  )
}
