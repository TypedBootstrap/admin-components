import React from 'react';
import classnames from 'classnames';

export interface NavLinkIconProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const NavLinkIcon: React.FC<NavLinkIconProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames('sb-nav-link-icon', className);

    return <div className={classNames} {...rest} />;
};

export default NavLinkIcon;
