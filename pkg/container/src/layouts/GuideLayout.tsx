import { defineComponent, PropType } from 'vue';
import { RouterView } from 'vue-router';
export const GuideLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div><RouterView /></div>
    )
  }
})
