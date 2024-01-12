import React from 'react';
import classnames from 'classnames';
import { NavLinkIcon } from '../../atoms';

export interface SidenavLinkProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    tag?: React.ElementType;
}

const SidenavLink: React.FC<SidenavLinkProps> = props => {
    const { tag: Tag = 'a', children, className, icon, ...rest } = props;

    const classNames: string = classnames('nav-link', className);

    return (
        <Tag className={classNames} {...rest}>
            {icon && <NavLinkIcon>{icon}</NavLinkIcon>}
            {children}
        </Tag>
    );
};

export default SidenavLink;
