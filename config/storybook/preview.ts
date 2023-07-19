import type { Preview } from "@storybook/react"
import '../../src/app/styles/index.scss'
import {StyleDecorator} from '../../src/shared/config/styleDecorator/StyleDecorator'

const preview: Preview = {
  decorators: [StyleDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  
}


export default preview
