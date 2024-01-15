import React from 'react';
import { NavLink, NavLinkProps } from 'reactstrap';
import { NavLinkIcon } from '../../atoms';

export interface SidenavLinkProps extends NavLinkProps {
    icon?: React.ReactNode;
}

const SidenavLink: React.FC<SidenavLinkProps> = props => {
    const { children, icon, ...rest } = props;

    return (
        <NavLink {...rest}>
            {icon && <NavLinkIcon>{icon}</NavLinkIcon>}
            {children}
        </NavLink>
    );
};

export default SidenavLink;
