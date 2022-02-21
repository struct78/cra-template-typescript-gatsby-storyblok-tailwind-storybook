import { FC } from 'react'

export type PlaceholderProps = {
  name: string
}

export const Placeholder: FC<PlaceholderProps> = ({ name }: PlaceholderProps) => (
  <p><strong>{name}</strong> has not been created yet.</p>
)
