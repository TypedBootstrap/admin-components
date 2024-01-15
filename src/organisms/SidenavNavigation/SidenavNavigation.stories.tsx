import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SidenavUserFooter from '../../molecules/SidenavUserFooter';
import SidenavNavigation from './SidenavNavigation';

const meta: Meta<typeof SidenavNavigation> = {
    title: 'Organisms/SidenavNavigation',
    component: SidenavNavigation,
    decorators: [],
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        footer: <SidenavUserFooter name="Andrew Dyer" />,
        color: 'dark',
        dark: true,
        items: [
            {
                heading: 'Core'
            },
            {
                name: 'Dashboard',
                href: '/dashboard',
                icon: <i className="fas fa-tachometer-alt"></i>
            },
            {
                name: 'Pages',
                href: '#',
                icon: <i className="fas fa-book-open"></i>,
                submenu: [
                    {
                        name: 'Authentication',
                        href: '#',
                        submenu: [
                            {
                                name: 'Login',
                                href: '/login'
                            },
                            {
                                name: 'Register',
                                href: '/register'
                            },
                            {
                                name: 'Forgot Password',
                                href: '/forgot-password'
                            }
                        ]
                    },
                    {
                        name: 'Error',
                        href: '#',
                        submenu: [
                            {
                                name: '401 Page',
                                href: '/401'
                            },
                            {
                                name: '404 Page',
                                href: '/404'
                            },
                            {
                                name: '500 Page',
                                href: '/500'
                            }
                        ]
                    }
                ]
            },
            {
                heading: 'Addons'
            },
            {
                name: 'Charts',
                href: '/charts',
                icon: <i className="fas fa-chart-area"></i>
            },
            {
                name: 'Tables',
                href: '/tables',
                icon: <i className="fas fa-table"></i>
            }
        ],
        light: false
    },
    render: args => <SidenavNavigation {...args} />
};
