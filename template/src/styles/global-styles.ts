import emotionReset from "emotion-reset"
import { css } from "@emotion/core"
import tw from "twin.macro"

export const GlobalStyles = css`
  ${emotionReset}
  body {
    ${tw`text-white bg-black`}
    font-family: Arial;
  }
`
