import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '..';

const meta = {
    title: 'Atoms/Footer',
    component: Footer,
    tags: ['autodocs']
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        bg: undefined
    },
    render: args => <Footer bg={args.bg}>Footer</Footer>
};
