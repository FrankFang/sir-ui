import { useToggle, onClickOutside } from '@vueuse/core';
import { defineComponent, PropType, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { Icon } from '../components/Icon';
import logo from '../assets/images/logo.png'
import { MenuIcon, MenuIconStyles } from '../components/MenuIcon';
export const HomeLayout = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const [menuVisible, toggleMenuVisible] = useToggle(false)
    const nav = ref<HTMLElement>()
    const onToggleMenu = () => {
      toggleMenuVisible(!menuVisible.value)
    }
    onClickOutside(nav, () => {
      if (menuVisible.value === false) { return }
      toggleMenuVisible()
    })
    return () => (
      <div>
        <nav ref={nav} border-b-1 b-gray-200 flex justify-between item-center relative>
          <RouterLink to="/" flex items-center p-4px>
            <img width="512" height="512" src={logo} alt="logo" w-32px h-32px />
            <span>Sir UI</span>
          </RouterLink>
          <div hidden md-block class={menuVisible.value ? 'dyn-block' : ''} >
            <div absolute top="100%" mt-1px left-0 w='100%' bg-white
              flex justify-center items-center shadow p-16px
              md="relative top-0 shadow-none p-0 m-0"
            >
              <ul flex md-flex-row flex-col w-20em max-w="80%"
                md="justify-end w-auto max-w-none gap-x-16px px-16px">
                <li border-b-1 md-border-b-none py-12px md-shrink-0>文档</li>
                <li border-b-1 md-border-b-none py-12px md-shrink-0>组件</li>
                <li border-b-1 md-border-b-none py-12px md-shrink-0>GitHub</li>
                <li border-b-1 md-border-b-none py-12px md-shrink-0>关于作者</li>
              </ul>
            </div>
          </div>
          <div flex items-center justify-center px-8px onClick={onToggleMenu}
            md-hidden
          >
            <MenuIcon active={menuVisible.value} />
          </div>
        </nav>
        <main min-h-400px>
          <RouterView />
        </main>
        <footer border-t-1 text-gray-500 text-center p-16px>
          版权所有 © 2022
        </footer>
      </div>
    )
  }
})
