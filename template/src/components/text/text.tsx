import React, { FC } from 'react'
import SbEditable from 'storyblok-react'
import { render } from 'storyblok-rich-text-react-renderer'
import tw from "twin.macro"
import { ComponentProps } from '../../@types/components'

export type TextProps = {}

const Container = tw.div``

export const Text: FC<ComponentProps<TextProps>> = ({ blok }: ComponentProps<TextProps>) => {
  const { _uid, text } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <Container>
        {render(text)}
      </Container>
    </SbEditable>
  )
}
