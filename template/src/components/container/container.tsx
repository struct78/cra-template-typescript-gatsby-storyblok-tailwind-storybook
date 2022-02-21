import { FC } from 'react'
import { styled } from "twin.macro"
import { ContainerStoryblok } from '../../@types/storyblok'
import { Base } from '../base/base'

export type ContainerProps = {}

const ContainerWrapper = styled(Base)<ContainerProps>`
  p-10
`

export const Container: FC<Blok<ContainerStoryblok>> = (props: Blok<ContainerStoryblok>) => {
  return (
    <ContainerWrapper as="section" {...props} />
  )
}
