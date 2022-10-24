import { defineComponent, PropType } from 'vue';
export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    }
  },
  setup: (props, context) => {
    const { name, ...rest } = props
    return () => (
      <svg fill-current w-1em h-1em {...rest}>
        <use xlinkHref={'#' + name} />
      </svg>
    )
  }
})
