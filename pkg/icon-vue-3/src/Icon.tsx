import { defineComponent } from 'vue';
import './Icon.scss';
import 'virtual:svgsprites-icon';
export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class="sir-icon">
        <use xlinkHref={'#' + props.name} />
      </svg>
    )
  }
})
