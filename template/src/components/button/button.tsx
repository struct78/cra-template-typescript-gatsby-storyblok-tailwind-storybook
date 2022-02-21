import { ButtonHTMLAttributes } from 'react'
import tw from "twin.macro"

export const StyledButton = tw.button`
  px-3 py-2 bg-black text-white min-w-20
`

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton {...props} />
}
