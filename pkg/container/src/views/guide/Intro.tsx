import { defineComponent, onMounted, ref } from 'vue';

import { SandpackClient } from "@codesandbox/sandpack-client";
import { vueTemplate } from './vueTemplate';

export const Intro = defineComponent({
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
      setTimeout(() => {
        client.updatePreview({
          ...vueTemplate,
          files: {
            ...vueTemplate.files,
            "/src/App.vue": {
              code: `<template>
    <main id="app">
      <h1>Hello World2</h1>
    </main>
  </template>

  <script>
  export default {
    name: "App",
  };
  </script>

  <style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  `,
            },
          }
        })
      }, 10000)

    })
    return () => (
      <div>Intro
        <iframe b-1 b-red w-600px h-300px ref={iframe} />
      </div>

    )
  }
})
