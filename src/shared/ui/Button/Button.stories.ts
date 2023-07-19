import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import 'app/styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.CLEAR
  },
}

export const Outline: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.OUTLINE
  },
}

export const Large: Story = {
  args: {
    children: 'button',
    theme: ThemeButton.CLEAR
  },
}