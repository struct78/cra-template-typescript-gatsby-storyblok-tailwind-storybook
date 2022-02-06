import { styled, TwStyle } from "twin.macro"
import { styles } from "../../styles/style-map"

export type BaseProps = {
  [key in keyof typeof styles]: Record<string, TwStyle>
}

const propsToCss = (props: BaseProps) => {
  const classes: TwStyle[] = []
  console.log(props)
  Object.keys(props).forEach((key: string) => {
    //classes.push(styles[key][props[key]])
  })
  return classes
}

export const Base = styled.div<BaseProps>`
  ${(props) => propsToCss(props)}
`
