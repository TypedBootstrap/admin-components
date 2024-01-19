import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DashboardLayout from './DashboardLayout';

const meta: Meta<typeof DashboardLayout> = {
    title: 'Templates/DashboardLayout',
    component: DashboardLayout,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        footer: <div>Footer</div>,
        sidenav: <div>Sidenav</div>,
        sidenavToggled: false,
        topnav: <div>Topnav</div>,
        topnavFixed: false
    },
    render: args => <DashboardLayout {...args}>Hello world!</DashboardLayout>
};
