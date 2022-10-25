import { defineComponent } from 'vue';
import { MicroApp } from '../components/MicroApp';
export const IconPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div p-16px>
        <MicroApp
          name="vue-3-components"
          entry={isDev
            ? 'http://localhost:5177/src/entry.tsx'
            : 'http://localhost:4177/manifest.json'}
        />
      </div>
    )
  }
})
