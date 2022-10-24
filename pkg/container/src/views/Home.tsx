import { onClickOutside, useToggle } from '@vueuse/core'
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/images/logo.png'
import { Icon } from '../components/Icon'
export const Home = defineComponent({
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
          <div flex items-center p-4px>
            <img width="512" height="512" src={logo} alt="logo" w-32px h-32px />
            <span>Sir UI</span>
          </div>
          <div hidden md-block class={menuVisible.value ? 'status-block' : ''} >
            <div absolute top="100%" mt-1px left-0 w='100%' bg-white
              flex justify-center items-center shadow text-xs p-16px
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
            {menuVisible.value ? <Icon name="close" /> : <Icon name="menu" />}
          </div>
        </nav>
        <main>
          <div text-center flex flex-col gap-y-16px pt-16px pb-48px
            justify-center items-center border-b-1>
            <img width="512" height="512" src={logo} alt="logo" max-h-256px />
            <h1 text-6xl>铯UI</h1>
            <div flex gap-x-16px justify-center align-center>
              <RouterLink to="/guide/intro" btn btn-primary>开始使用</RouterLink>
              <RouterLink to="/guide/install" btn btn-secondary>安装</RouterLink>
              <button btn btn-secondary>切换主题</button>
            </div>
          </div>
          <section flex flex-col gap-y-8px p-32px text-gray-500>
            <h2 text-black mt-32px>支持多种框架</h2>
            <div>
              Vue 2、Vue 3、React 等主流框架均可使用
            </div>
            <h2 text-black mt-32px>代码工整</h2>
            <div>
              如果你想学习如何制作 UI 组件库，可以参考我们的源码
            </div>
            <h2 text-black mt-32px>功能全面</h2>
            <div>
              支持主题切换、Hooks API、TypeScript 等等
            </div>
          </section>
        </main>
        <footer border-t-1 text-gray-500 text-center p-16px>
          版权所有 © 2022
        </footer>
      </div>
    )
  },
})
