import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Example2View } from './example-2.view'

const meta: Meta<typeof Example2View> = {
    title: 'Example2View',
    component: Example2View,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Example2View>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('example-2-view')

        expect(container).toBeTruthy()
    },
}
