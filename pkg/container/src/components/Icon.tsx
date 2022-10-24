import { defineComponent } from 'vue';
export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <svg w-1em h-1em>
        <use xlinkHref={'#' + props.name} />
      </svg>
    )
  }
})
