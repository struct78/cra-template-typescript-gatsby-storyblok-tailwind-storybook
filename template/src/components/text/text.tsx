import loadable from '@loadable/component'
import { FC } from 'react'
import tw from 'twin.macro'
import { render } from 'storyblok-rich-text-react-renderer'
import { TextStoryblok } from '../../@types/storyblok'
import { Blok } from 'storyblok-react'
const Editable = loadable(() => import(/* webpackChunkName: "storyblok-react" */ 'storyblok-react'))

const Container = tw.div`
  vr-normal-16
`

export const Text: FC<Blok<TextStoryblok>> = ({ blok }: Blok<TextStoryblok>) => {
  const { _uid, text } = blok

  return (
    <Editable content={blok} key={_uid}>
      <Container>{render(text)}</Container>
    </Editable>
  )
}
