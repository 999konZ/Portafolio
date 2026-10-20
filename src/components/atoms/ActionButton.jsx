import { Button } from 'antd'

export default function ActionButton({ children, type = 'default', htmlType = 'button', href, onClick, pressed }) {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      href={href}
      onClick={onClick}
      aria-pressed={pressed}
    >
      {children}
    </Button>
  )
}
