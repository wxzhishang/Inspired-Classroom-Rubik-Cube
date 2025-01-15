import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack(config, { addRules }) {
      addRules([
        {
          test: /\.pdf$/,
          type: 'asset/resource',
        },
      ])
    },
  },
})
