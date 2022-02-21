import { styled, TwStyle } from "twin.macro"
import { styles } from "../../styles/style-map"

export type BaseProps = {
  [key in keyof typeof styles]: Record<string, Record<string, TwStyle>>
}

const propsToCss = (props: BaseProps) => {
  let classes: TwStyle[] = []

  Object.keys(props).forEach((key: string) => {
    if (!styles[key as keyof typeof styles] || !styles[key][props[key]]) {
      return
    }
    classes.push(styles[key][props[key]])
  })
  return classes
}

export const Base = styled.div<BaseProps>`
  ${(props) => propsToCss(props)}
`
