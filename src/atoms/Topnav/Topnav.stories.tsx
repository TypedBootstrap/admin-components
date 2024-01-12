import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Topnav from './Topnav';

const meta: Meta<typeof Topnav> = {
    title: 'Atoms/Topnav',
    component: Topnav,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        bg: 'dark',
        dark: true,
        light: false
    },
    render: args => (
        <Topnav bg={args.bg} dark={args.dark} light={args.light}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
            </div>
        </Topnav>
    )
};
