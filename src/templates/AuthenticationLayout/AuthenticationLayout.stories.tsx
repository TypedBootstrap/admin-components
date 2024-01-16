import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AuthenticationLayout from './AuthenticationLayout';

const meta: Meta<typeof AuthenticationLayout> = {
    title: 'Templates/AuthenticationLayout',
    component: AuthenticationLayout,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        footer: <div>Footer</div>
    },
    render: args => <AuthenticationLayout {...args}>Hello world!</AuthenticationLayout>
};
