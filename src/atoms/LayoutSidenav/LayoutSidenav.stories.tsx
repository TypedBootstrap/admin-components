import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LayoutSidenavContent from '../LayoutSidenavContent';
import LayoutSidenavNav from '../LayoutSidenavNav';
import LayoutSidenav from './LayoutSidenav';

const meta: Meta<typeof LayoutSidenav> = {
    title: 'Atoms/LayoutSidenav',
    component: LayoutSidenav,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {},
    render: args => (
        <LayoutSidenav {...args}>
            <LayoutSidenavNav>Nav</LayoutSidenavNav>
            <LayoutSidenavContent>Content</LayoutSidenavContent>
        </LayoutSidenav>
    )
};
