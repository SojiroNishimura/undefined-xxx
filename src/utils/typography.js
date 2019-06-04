import Typography from "typography"
import Kubrick from "typography-theme-wordpress-kubrick"

Kubrick.baseFontSize = "16"

const typography = new Typography(Kubrick)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
