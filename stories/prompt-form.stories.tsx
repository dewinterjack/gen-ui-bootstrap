import type { Meta, StoryObj } from '@storybook/react'
import { createMock } from 'storybook-addon-module-mock'
import { PromptForm } from '@/components/prompt-form'
import * as airsc from 'ai/rsc'

const meta: Meta<typeof PromptForm> = {
  title: 'components/PromptForm',
  component: PromptForm,
  parameters: {
    nextjs: {
      appDirectory: true
    },
    moduleMock: {
      mock: () => {
        const mock = createMock(airsc, 'useActions')
        mock.mockReturnValue({
          submitUserMessage: () => Promise.resolve({ success: true })
        })
        return [mock]
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(airsc, 'useActions')
        mock.mockReturnValue({
          submitUserMessage: () => Promise.resolve({ success: true })
        })
      }
    }
  }
}
