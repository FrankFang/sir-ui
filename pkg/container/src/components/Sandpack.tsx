import { SandpackClient } from '@codesandbox/sandpack-client';
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { vueTemplate } from '../views/guide/vueTemplate';
export const Sandpack = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const iframe = ref<HTMLIFrameElement>()
    let client: SandpackClient
    onMounted(() => {
      if (!iframe.value) { return }
      client = new SandpackClient(iframe.value, {
        ...vueTemplate
      }, {
        showOpenInCodeSandbox: false,
      });
    })
    return () => (
      <div p-16px>
        Intro
        <iframe b-1 b-red w-280px h-210px ref={iframe} />
      </div>
    )
  }
})
