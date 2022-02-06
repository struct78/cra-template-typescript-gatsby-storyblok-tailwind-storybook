import React, { FC } from 'react'
import SbEditable from 'storyblok-react'
import tw from 'twin.macro'
import { ComponentProps } from '../../@types/components'

export type HeadingProps = ComponentProps<any>

export const Tag = tw.h1`
  text-44
`

export const Heading: FC<HeadingProps> = ({ blok }: HeadingProps) => {
  const { _uid, text, size } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <Tag as={size}>{text}</Tag>
    </SbEditable>
  )
}
