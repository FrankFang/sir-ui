import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/images/logo.png'
import { HomeLayout } from '../layouts/HomeLayout'
export const Home = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
        <div text-center flex flex-col gap-y-16px pt-16px pb-48px
          justify-center items-center border-b-1>
          <img width="512" height="512" src={logo} alt="logo" max-h-256px />
          <h1 text-6xl>铯UI</h1>
          <div flex gap-x-16px justify-center align-center>
            <RouterLink to="/guide/intro" btn btn-primary>介绍</RouterLink>
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
      </>
    )
  },
})
