import { defineComponent } from 'vue'
import { Icon } from '../Icon'
export const Demo3 = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
        <Icon name="add" spin />
        <Icon name="refresh" spin />
      </>
    )
  },
})
