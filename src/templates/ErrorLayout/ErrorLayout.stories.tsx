import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ErrorLayout from './ErrorLayout';

const meta: Meta<typeof ErrorLayout> = {
    title: 'Templates/ErrorLayout',
    component: ErrorLayout,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        footer: <div>Footer</div>
    },
    render: args => <ErrorLayout {...args}>Hello world!</ErrorLayout>
};
