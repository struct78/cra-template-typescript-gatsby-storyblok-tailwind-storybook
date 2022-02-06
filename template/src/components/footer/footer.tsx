import React, { FC, HTMLAttributes } from "react"
import tw from "twin.macro"
import { ComponentProps } from "../../@types/components"

export type FooterProps = ComponentProps<HTMLAttributes<HTMLElement>>

export const FooterContainer = tw.footer``

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  return <FooterContainer {...props} />
}
