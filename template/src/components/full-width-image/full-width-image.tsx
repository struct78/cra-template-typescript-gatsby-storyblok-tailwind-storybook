import React, { FC } from 'react'
import SbEditable from 'storyblok-react'
import tw from 'twin.macro'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import { ComponentProps } from '../../@types/components'

export type FullWidthImageProps = ComponentProps<any> & {
  image: BlokImage
  lazy?: boolean
}

const FullWidthImageContainer = tw.div``

export const FullWidthImage: FC<FullWidthImageProps> = ({ blok, lazy = true }: FullWidthImageProps) => {
  const { _uid, image } = blok
  const { alt, title } = image || {}
  const fluidProps = getFluidGatsbyImage(image, {
    width: 1000,
  })

  return (
    <SbEditable content={blok} key={_uid}>
      <FullWidthImageContainer>
        <GatsbyImage image={fluidProps} alt={alt} title={title} />
      </FullWidthImageContainer>
    </SbEditable>
  )
}

