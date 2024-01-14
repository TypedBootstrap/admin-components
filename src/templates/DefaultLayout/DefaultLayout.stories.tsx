import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DefaultLayout from './DefaultLayout';

const meta: Meta<typeof DefaultLayout> = {
    title: 'Templates/DefaultLayout',
    component: DefaultLayout,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        navFixed: false,
        sidenavToggled: false,
        footer: <div>Footer</div>,
        sidenav: <div>Sidenav</div>,
        topnav: <div>Topnav</div>
    },
    render: args => <DefaultLayout {...args}>Hello world!</DefaultLayout>
};
