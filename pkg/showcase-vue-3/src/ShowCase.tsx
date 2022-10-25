import type { PropType } from 'vue'
import { defineComponent, inject, onMounted, ref } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github.css'
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)

export const ShowCase = defineComponent({
  inject: ['components', 'codes'],
  props: {
    demo: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  setup: (props, context) => {
    const components: Record<string, object> = inject('components', {})
    const codes: Record<string, string> = inject('codes', {})
    const path = Object.entries(components)
      .find(([path, mod]) => Object.values(mod).find(v => v === props.demo))
      ?.[0]
    const code = Object.entries(codes)
      .find(([p, code]) => p === path)
      ?.[1]
    const refCode = ref<HTMLElement>()
    onMounted(() => {
      if (refCode.value) {
        hljs.highlightElement(refCode.value)
      }
    })

    return () => (
      <>
        <div class="demo">
          <props.demo />
        </div>
        <div class="code">
          <pre>
            <code ref={refCode}>
              {code}
            </code>
          </pre>
        </div>
      </>
    )
  },
})
