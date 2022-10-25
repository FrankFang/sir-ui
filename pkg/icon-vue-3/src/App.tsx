import { defineComponent, provide } from 'vue'
import './App.module.scss'
import { ShowCase } from 'showcase-vue-3'
import 'showcase-vue-3/dist/style.css'
import { Demo1 } from './demos/Demo1'
import { Demo2 } from './demos/Demo2'
import { Demo3 } from './demos/Demo3'
export const App = defineComponent({
  setup: (props, context) => {
    provide('components', import.meta.glob('./demos/*.tsx', { eager: true }))
    provide('codes', import.meta.glob('./demos/*.tsx', { eager: true, as: 'raw' }))
    return () => (
      <article>
        <section>
          <h2>图标</h2>
          <ShowCase demo={Demo1} />
        </section>
        <section>
          <h2>有颜色的图标</h2>
          <ShowCase demo={Demo2} />
        </section>
        <section>
          <h2>旋转的图标</h2>
          <ShowCase demo={Demo3} />
        </section>
      </article>
    )
  },
})
