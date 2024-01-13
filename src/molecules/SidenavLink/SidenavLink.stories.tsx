import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sidenav, SidenavMenu } from '../../atoms';
import SidenavLink from './SidenavLink';

const meta: Meta<typeof SidenavLink> = {
    title: 'Molecules/SidenavLink',
    component: SidenavLink,
    decorators: [
        Story => (
            <Sidenav dark>
                <SidenavMenu>
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
    args: {},
    render: args => (
        <SidenavLink href="#" icon={<i className="fas fa-tachometer-alt"></i>}>
            Dashboard
        </SidenavLink>
    )
};
