import { ReactNode } from "react"
import { Blok } from "storyblok-react"

type ComponentProps<T> = HTMLAttributes & {
  blok: Blok<T>
}
