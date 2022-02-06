import React, { FC } from 'react'
import SbEditable from 'storyblok-react'
import tw from "twin.macro"
import { ComponentProps } from '../../@types/components'

export type DividerProps = {}

const DividerContainer = tw.div``

const Rule = tw.hr``

export const Divider: FC<ComponentProps<DividerProps>> = ({ blok }: ComponentProps<DividerProps>) => {
  const { _uid } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <DividerContainer>
        <Rule />
      </DividerContainer>
    </SbEditable>
  )
}

