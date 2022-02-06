import React, { FC } from 'react'
import { styled } from "twin.macro"
import { ComponentProps } from '../../@types/components'
import { Base } from '../base/base'

export type ContainerProps = {}

const ContainerWrapper = styled(Base)<ContainerProps>`
  p-10
`

export const Container: FC<ComponentProps<ContainerProps>> = (props: ComponentProps<ContainerProps>) => {
  return (
    <ContainerWrapper as="section" {...props} />
  )
}
