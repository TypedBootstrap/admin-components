import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SidenavLink } from '..';
import { Sidenav, SidenavMenu } from '../../atoms';

const meta = {
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
} satisfies Meta<typeof SidenavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {},
    render: () => <SidenavLink href="#" icon={<i className="fas fa-tachometer-alt"></i>}>Dashboard</SidenavLink>
};
