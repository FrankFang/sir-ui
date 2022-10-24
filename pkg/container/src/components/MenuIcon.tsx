import { defineComponent } from 'vue'
import s from './MenuIcon.module.scss'
export { s as MenuIconStyles }
export const MenuIcon = defineComponent({
  props: {
    active: Boolean
  },
  setup: (props, context) => {
    return () => (
      <div class={[s.wrapper, props.active && s.active]} inline-block w-16px h-16px>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
})
