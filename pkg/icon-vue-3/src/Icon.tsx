import { defineComponent } from 'vue';
import './Icon.scss';
import 'virtual:svgsprites-icon';
export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    spin: Boolean
  },
  setup: (props, context) => {
    return () => (
      <svg class={["sir-icon", props.spin && "sir-icon-spin"]}>
        <use xlinkHref={'#' + props.name} />
      </svg>
    )
  }
})
