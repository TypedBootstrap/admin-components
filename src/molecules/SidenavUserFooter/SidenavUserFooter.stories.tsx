import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sidenav, SidenavMenu } from '../../atoms';
import SidenavUserFooter from './SidenavUserFooter';

const meta = {
    title: 'Molecules/SidenavUserFooter',
    component: SidenavUserFooter,
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
} satisfies Meta<typeof SidenavUserFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        name: 'Andrew Dyer'
    },
    render: (args) => <SidenavUserFooter {...args} />
};
