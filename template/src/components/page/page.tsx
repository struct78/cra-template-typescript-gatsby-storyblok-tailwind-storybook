import { FC } from 'react'
import SbEditable, { Blok } from 'storyblok-react'
import { Resolver } from '../resolver/resolver'

export const Page: FC<Blok<any>> = ({ blok }: Blok<any>) => {
  const content = blok.body && blok.body.map((child: Blok<any>) => <Resolver blok={child} key={child._uid}/> )
  return (
    <SbEditable content={blok}>
      {content}
    </SbEditable>
  )
}
