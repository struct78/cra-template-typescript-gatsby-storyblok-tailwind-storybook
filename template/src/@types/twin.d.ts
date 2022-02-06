import "twin.macro"
import _styled, { css as _css } from "styled-components"

declare module "twin.macro" {
  const styled: typeof _styled
  const css: typeof _css
}
