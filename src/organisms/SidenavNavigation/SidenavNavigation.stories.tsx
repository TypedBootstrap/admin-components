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
        dark: true,
        light: false,
        footer: <SidenavUserFooter name="Andrew Dyer" />,
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
                heading: 'Interface'
            },
            {
                name: 'Layouts',
                href: '#',
                icon: <i className="fas fa-columns"></i>,
                submenu: [
                    {
                        name: 'Static Navigation',
                        href: '/layout-static'
                    },
                    {
                        name: 'Light Sidenav',
                        href: '/layout-sidenav-light'
                    }
                ]
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
        ]
    },
    render: args => <SidenavNavigation {...args} />
};
