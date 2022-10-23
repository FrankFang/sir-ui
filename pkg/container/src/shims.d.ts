import '@vue/runtime-dom'

interface ExtraAttributes {
  flex?: boolean
  btn?: boolean
  container?: boolean
}

declare module 'vue' {
  interface HTMLAttributes extends ExtraAttributes { }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes extends ExtraAttributes { }
  }
}
