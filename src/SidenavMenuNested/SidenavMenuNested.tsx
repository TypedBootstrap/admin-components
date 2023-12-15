import React from 'react';
import classnames from 'classnames';

export interface SidenavMenuNestedProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

const SidenavMenuNested: React.FC<SidenavMenuNestedProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames('sb-sidenav-menu-nested', 'nav', className);

    return <nav className={classNames} {...rest} />;
};

export default SidenavMenuNested;
