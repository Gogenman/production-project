import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import style from './Button.module.scss'
import '../../../app/styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'button',
    className: style.Button,
  },
}

export const Secondary: Story = {
  args: {
    children: 'button',
    className: style.Button,
  },
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
