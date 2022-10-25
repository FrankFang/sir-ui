import { defineComponent } from 'vue'
import { Icon } from '../Icon'
export const Demo2 = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
        <Icon name="add" style={{ color: 'red' }} />
        <Icon name="refresh" style={{ color: 'blue' }} />
      </>
    )
  },
})
