import { ReactNode } from 'react'

interface AuthenticLayoutProps {
  children: ReactNode
}

export default function Authentic({
  children
}: AuthenticLayoutProps) {
  return (
    <div>
      <h1>Autenticação</h1>
      {children}
    </div>
  )
}