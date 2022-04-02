import loadable from '@loadable/component'
import { FC } from 'react'
import { Blok } from 'storyblok-react'
import tw, { styled } from 'twin.macro'
import { HeadingStoryblok } from '../../@types/storyblok'

const SbEditable = loadable(() => import(/* webpackChunkName: "storyblok-react" */"storyblok-react"))

export const Tag = styled.h1<Pick<Blok<HeadingStoryblok>, "size">>`
  ${tw`pb-1 font-extrabold font-heading`}
  ${({ size }) => {
    switch (size) {
      case "h5":
        return tw`vr-normal-20`
      case "h4":
        return tw`vr-normal-26`
      case "h3":
        return tw`vr-normal-28`
      case "h2":
        return tw`vr-normal-38`
      case "h1":
      default:
        return tw`vr-normal-44`
    }
  }}
`

export const Heading: FC<Blok<HeadingStoryblok>> = ({ blok }: Blok<HeadingStoryblok>) => {
  const { _uid, text, size } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <Tag as={size} size={size}>{text}</Tag>
    </SbEditable>
  )
}
