import emotionReset from "emotion-reset"
import { css } from "@emotion/core"
import tw from "twin.macro"

export const GlobalStyles = css`
  ${emotionReset}
  * {
    ${tw`box-border`}
  }
  body {
    ${tw`font-normal text-black bg-white font-text`}
  }
  a {
    ${tw`text-black`}
  }
`
