import React, { ButtonHTMLAttributes } from 'react'
import tw from "twin.macro"

export const StyledButton = tw.button`
`

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton {...props} />
}
