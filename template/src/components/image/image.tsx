import loadable from '@loadable/component'
import { FC } from 'react'
import tw from 'twin.macro'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import { Image as StoryblokImage } from '@storyofams/storyblok-toolkit'
import { ImageStoryblok } from '../../@types/storyblok'
import { Desktop, Mobile } from '../../styles/utility'

const SbEditable = loadable(() => import(/* webpackChunkName: "storyblok-react" */ 'storyblok-react'))

const ImageContainer = tw.div``

export const Image: FC<Component<ImageStoryblok>> = ({ blok }: Component<ImageStoryblok>) => {
  const {
    _uid,
    lazy,
    desktopHidden,
    desktopImage,
    desktopAspectRatio,
    mobileAspectRatio,
    mobileHidden,
    mobileImage,
  } = blok

  const onlyHasOneImage = !(!!desktopImage && !!mobileImage)
  const mobileFluidProps = getFluidGatsbyImage(mobileImage?.filename, { aspectRatio: mobileAspectRatio })
  const desktopFluidProps = getFluidGatsbyImage(desktopImage?.filename, { aspectRatio: desktopAspectRatio })

  const mobileImageProps = {
    ...mobileFluidProps,
    ...mobileImage,
    aspectRatio: parseFloat(mobileAspectRatio),
    lazy,
  }

  const desktopImageProps = {
    ...desktopFluidProps,
    ...desktopImage,
    aspectRatio: parseFloat(desktopAspectRatio),
    lazy,
  }

  return (
    <SbEditable content={blok} key={_uid}>
      <ImageContainer>
        {onlyHasOneImage && (
          <StoryblokImage {...mobileImageProps} />
        )}
        {!onlyHasOneImage && !mobileHidden && mobileImage && (
          <Mobile>
            <StoryblokImage {...mobileImageProps} />
          </Mobile>
        )}
        {!onlyHasOneImage && !desktopHidden && desktopImage && (
          <Desktop>
            <StoryblokImage {...desktopImageProps} />
          </Desktop>
        )}
      </ImageContainer>
    </SbEditable>
  )
}
