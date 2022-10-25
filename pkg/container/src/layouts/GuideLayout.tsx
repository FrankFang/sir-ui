import { useToggle, onClickOutside } from '@vueuse/core';
import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '../components/Icon'
import s from './GuideLayout.module.scss'
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
    const onClickAside = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName.toLowerCase() === 'a') {
          toggleMenuVisible(false)
        }
      }
    }
    return () => (
      <div>
        <div p-16px border-b-1>
          <div flex items-center gap-x-4px onClick={onToggleMenu}>
            <Icon name="menu" />
            <span>菜单</span>
          </div>
        </div>
        <div class={[s.overlay, menuVisible.value && s.overlay_active]} left-0 top-0 bg-black bg-opacity-50
          w="100%" h="100%" fixed z-1
        ></div>
        <aside class={[s.aside, menuVisible.value && s.active]}
          fixed z-2 left-0 top-0 w="100%" h="100%" >
          <div class={s.inner} ref={asideInner} min-w-13em h="100%" bg-white
            absolute z-2 onClick={onClickAside}>
            <section>
              <h2>开始</h2>
              <p><RouterLink activeClass={s.activeLink} to="/guide/intro">介绍</RouterLink></p>
              <p><RouterLink activeClass={s.activeLink} to="/guide/install"> 安装</RouterLink></p>
            </section>
            <section >
              <h2>组件</h2>
              <p><RouterLink activeClass={s.activeLink} to="/components/icon">Icon</RouterLink></p>
              <p><RouterLink activeClass={s.activeLink} to="/components/button">Button</RouterLink></p>
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

