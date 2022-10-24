import '@vue/runtime-dom'

interface ExtraAttributes {
  flex?: boolean
  btn?: boolean
  container?: boolean
  fixed?: boolean
  w?: string
  h?: string
  top?: string
  relative?: boolean
  absolute?: boolean
  shadow?: boolean
  hidden?: boolean
  md?: string
  bg?: string
}

declare module 'vue' {
  interface HTMLAttributes extends ExtraAttributes { }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes extends ExtraAttributes { }
  }
}
