import React, { FC } from 'react'
import SbEditable, { Blok } from 'storyblok-react'
import { ComponentProps } from '../../@types/components'
import { Resolver } from '../resolver/resolver'

export type PageProps = ComponentProps<any>

export const Page: FC<PageProps> = ({ blok }: PageProps) => {
  const content = blok.body && blok.body.map((child: Blok<any>) => <Resolver blok={child} key={child._uid}/> )
  return (
    <SbEditable content={blok}>
      {content}
    </SbEditable>
  )
}
