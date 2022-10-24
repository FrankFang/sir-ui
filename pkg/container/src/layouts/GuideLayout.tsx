import { useToggle, onClickOutside } from '@vueuse/core';
import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import { Icon } from '../components/Icon';
export const GuideLayout = defineComponent({
  setup: (props, context) => {
    const [menuVisible, toggleMenuVisible] = useToggle(false)
    const onToggleMenu = () => {
      toggleMenuVisible()
    }
    const asideInner = ref<HTMLElement>()
    onClickOutside(asideInner, () => {
      if (menuVisible.value === false) { return }
      toggleMenuVisible()
    })
    return () => (
      <div>
        <div p-16px border-b-1 text-gray>
          <div flex items-center gap-x-4px onClick={onToggleMenu}>
            <Icon name="menu" />
            <span>菜单</span>
          </div>
        </div>
        <aside hidden class={menuVisible.value ? 'dyn-flex' : ''}
          fixed left-0 top-0 w="100%" h="100%" bg-black bg-opacity-50>
          <div ref={asideInner} w="[calc(100%-64px)]" bg-white>
            <section>
              <h2>开始</h2>
              <p>介绍</p>
              <p>安装</p>
            </section>
            <section>
              <h2>组件</h2>
              <p>Icon</p>
              <p>Button</p>
            </section>
            <section>
              <h2>更多</h2>
              <p>更多1</p>
              <p>更多2</p>
            </section>
          </div>
        </aside>
        <div>
          <RouterView />
        </div>
      </div>
    )
  }
})

