import loadable from '@loadable/component'
import { FC } from 'react'
import { Blok } from 'storyblok-react'
import tw from "twin.macro"
const SbEditable = loadable(() => import(/* webpackChunkName: "storyblok-react" */"storyblok-react"))

export type DividerProps = {}

const DividerContainer = tw.div``

const Rule = tw.hr``

export const Divider: FC<Blok<DividerProps>> = ({ blok }: ComponentProps<DividerStoryblok>) => {
  const { _uid } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <DividerContainer>
        <Rule />
      </DividerContainer>
    </SbEditable>
  )
}

