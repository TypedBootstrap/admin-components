import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
    title: 'Atoms/Footer',
    component: Footer,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        bg: undefined
    },
    render: args => <Footer bg={args.bg}>Footer</Footer>
};
