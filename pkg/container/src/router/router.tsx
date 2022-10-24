import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import { createMicroApp } from '../components/MicroApp'
import { NotFound } from '../components/NotFound'
import { GuideLayout } from '../layouts/GuideLayout'
import { HomeLayout } from '../layouts/HomeLayout'
import { Intro } from '../views/guide/Intro'
import { Home } from '../views/Home'

const routes = [
  {
    path: '/', component: HomeLayout,
    children: [
      { path: '', component: Home },
      {
        path: 'guide', component: GuideLayout,
        children: [
          { path: 'intro', component: Intro }
        ]
      },
    ]
  },
  {
    path: '/app1',
    component: createMicroApp({
      name: 'app1',
      entry: isDev
        ? 'http://localhost:5174/src/entry.tsx'
        : 'http://localhost:4174/manifest.json',
    }),
  },
  {
    path: '/app2',
    component: createMicroApp({
      name: 'app2',
      beforeEntry: isDev
        ? 'http://localhost:5175/src/hmr.js'
        : undefined,
      entry: isDev
        ? 'http://localhost:5175/src/entry.tsx'
        : 'http://localhost:4175/manifest.json',
    }),
  },
  {
    path: '/app3',
    component: createMicroApp({
      name: 'app3',
      entry: isDev
        ? 'http://localhost:5176/src/entry.tsx'
        : 'http://localhost:4176/manifest.json',
    }),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
