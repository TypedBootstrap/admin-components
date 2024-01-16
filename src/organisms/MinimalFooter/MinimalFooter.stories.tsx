import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MinimalFooter from './MinimalFooter';

const meta: Meta<typeof MinimalFooter> = {
    title: 'Organisms/MinimalFooter',
    component: MinimalFooter,
    decorators: [],
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        text: '© Your Website 2024. All Rights Reserved.'
    },
    render: args => <MinimalFooter {...args} />
};
