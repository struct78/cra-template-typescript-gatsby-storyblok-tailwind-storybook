import React, { FC } from 'react'
import { ComponentProps } from '../../@types/components'

export type PlaceholderProps = {
  name: string
}

export const Placeholder: FC<ComponentProps<PlaceholderProps>> = ({ name }: PlaceholderProps) => (
  <p><strong>{name}</strong> has not been created yet.</p>
)
