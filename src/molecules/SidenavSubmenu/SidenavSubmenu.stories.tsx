import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Sidenav from '../../atoms/Sidenav';
import SidenavMenu from '../../atoms/SidenavMenu';
import SidenavLink from '../SidenavLink';
import SidenavSubmenu from './SidenavSubmenu';

const meta: Meta<typeof SidenavSubmenu> = {
    title: 'Molecules/SidenavSubmenu',
    component: SidenavSubmenu,
    decorators: [
        Story => (
            <Sidenav dark>
                <SidenavMenu>
                    <SidenavLink href="#" icon={<i className="fas fa-star"></i>}>
                        Sidenav Submenu
                    </SidenavLink>
                    <Story />
                </SidenavMenu>
            </Sidenav>
        )
    ],
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        isOpen: true
    },
    render: args => (
        <SidenavSubmenu {...args}>
            <SidenavLink href="#">Sidenav Submenu Link</SidenavLink>
            <SidenavLink href="#">Another Sidenav Submenu Link</SidenavLink>
            <SidenavLink href="#">And Another Sidenav Submenu Link</SidenavLink>
        </SidenavSubmenu>
    )
};
