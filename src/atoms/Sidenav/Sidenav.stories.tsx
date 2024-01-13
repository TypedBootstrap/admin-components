import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NavLinkIcon } from '../NavLinkIcon';
import { SidenavCollapseArrow } from '../SidenavCollapseArrow';
import { SidenavFooter } from '../SidenavFooter';
import { SidenavMenu } from '../SidenavMenu';
import { SidenavMenuHeading } from '../SidenavMenuHeading';
import { SidenavMenuNested } from '../SidenavMenuNested';
import Sidenav from './Sidenav';

const meta: Meta<typeof Sidenav> = {
    title: 'Atoms/Sidenav',
    component: Sidenav,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        dark: true,
        light: false
    },
    render: args => (
        <Sidenav {...args}>
            <SidenavMenu>
                <SidenavMenuHeading>Core</SidenavMenuHeading>
                <a className="nav-link" href="#">
                    <NavLinkIcon>
                        <i className="fas fa-tachometer-alt"></i>
                    </NavLinkIcon>
                    Dashboard
                </a>
                <SidenavMenuHeading>Interface</SidenavMenuHeading>
                <a className="nav-link" href="#">
                    <NavLinkIcon>
                        <i className="fas fa-columns"></i>
                    </NavLinkIcon>
                    Layouts
                    <SidenavCollapseArrow>
                        <i className="fas fa-angle-down"></i>
                    </SidenavCollapseArrow>
                </a>
                <SidenavMenuNested>
                    <a className="nav-link" href="#">
                        Static Navigation
                    </a>
                    <a className="nav-link" href="#">
                        Light Sidenav
                    </a>
                </SidenavMenuNested>
                <a className="nav-link" href="#">
                    <NavLinkIcon>
                        <i className="fas fa-book-open"></i>
                    </NavLinkIcon>
                    Pages
                    <SidenavCollapseArrow>
                        <i className="fas fa-angle-down"></i>
                    </SidenavCollapseArrow>
                </a>
                <SidenavMenuNested>
                    <a className="nav-link" href="#">
                        Authentication
                        <SidenavCollapseArrow>
                            <i className="fas fa-angle-down"></i>
                        </SidenavCollapseArrow>
                    </a>
                    <SidenavMenuNested>
                        <a className="nav-link" href="#">
                            Login
                        </a>
                        <a className="nav-link" href="#">
                            Register
                        </a>
                        <a className="nav-link" href="#">
                            Forgot Password
                        </a>
                    </SidenavMenuNested>
                    <a className="nav-link" href="#">
                        Error
                        <SidenavCollapseArrow>
                            <i className="fas fa-angle-down"></i>
                        </SidenavCollapseArrow>
                    </a>
                    <SidenavMenuNested>
                        <a className="nav-link" href="#">
                            401 Page
                        </a>
                        <a className="nav-link" href="#">
                            404 Page
                        </a>
                        <a className="nav-link" href="#">
                            500 Page
                        </a>
                    </SidenavMenuNested>
                </SidenavMenuNested>
                <SidenavMenuHeading>Addons</SidenavMenuHeading>
                <a className="nav-link" href="#">
                    <NavLinkIcon>
                        <i className="fas fa-chart-area"></i>
                    </NavLinkIcon>
                    Charts
                </a>
                <a className="nav-link" href="#">
                    <NavLinkIcon>
                        <i className="fas fa-table"></i>
                    </NavLinkIcon>
                    Tables
                </a>
            </SidenavMenu>
            <SidenavFooter>
                <div className="small">Logged in as:</div>
                Andrew Dyer
            </SidenavFooter>
        </Sidenav>
    )
};
