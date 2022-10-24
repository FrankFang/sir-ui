import path from 'path'
import fs from 'fs'
import store from 'svgstore'
import { optimize } from 'svgo'
import { ViteDevServer, Plugin } from 'vite'

interface Options {
  inputFolder?: string
  inline?: boolean
}
export const svgsprites = (options: Options = {}): Plugin => {
  const virtualModuleId = 'virtual:svgsprites'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  const { inputFolder = 'src/assets/icons', inline = false } = options

  const handleFileCreationOrUpdate = (file: string, server: ViteDevServer) => {
    if (file.indexOf(inputFolder) === -1) { return }
    const code = generateCode()
    server.ws.send('svgsprites:change', { code })
    const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
    if (!mod) { return }
    server.moduleGraph.invalidateModule(mod, undefined, Date.now())
  }
  const generateCode = () => {
    const sprites = store(options);
    const iconsDir = path.resolve(inputFolder);
    for (const file of fs.readdirSync(iconsDir)) {
      const filepath = path.join(iconsDir, file);
      const svgId = path.parse(file).name
      let code = fs.readFileSync(filepath, { encoding: 'utf-8' });
      sprites.add(svgId, code)
    }
    const { data: code } = optimize(sprites.toString({ inline }), {
      plugins: [
        'cleanupAttrs', 'removeDoctype', 'removeComments', 'removeTitle', 'removeDesc', 'removeEmptyAttrs',
        { name: "removeAttrs", params: { attrs: "(data-name|data-xxx)" } }
      ]
    })
    return code
  }
  return {
    name: 'svgsprites',
    configureServer(server) {
      server.watcher.on('add', (file) => {
        handleFileCreationOrUpdate(file, server)
      })
      server.watcher.on('change', (file) => {
        handleFileCreationOrUpdate(file, server)
      })
    },
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        const code = generateCode()
        return `!function(){
  const div = document.createElement('div')
  div.innerHTML = \`${code}\`
  const svg = div.getElementsByTagName('svg')[0]
  const updateSvg = (svg) => {
    if (!svg) { return }
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    svg.setAttribute("aria-hidden", "true")
  }
  updateSvg(svg)
  // listen dom ready event
  document.addEventListener('DOMContentLoaded', () => {
    if (document.body.firstChild) {
      document.body.insertBefore(div, document.body.firstChild)
    } else {
      document.body.appendChild(div)
    }
  })
  if (import.meta.hot) {
    import.meta.hot.on('svgsprites:change', (data) => {
      const code = data.code
      div.innerHTML = code
      const svg = div.getElementsByTagName('svg')[0]
      updateSvg(svg)
    })
  }
}()`
      }
    }
  }
}
