import React from 'react';
import classnames from 'classnames';

export interface LayoutSidenavNavProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutSidenavNav: React.FC<LayoutSidenavNavProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layout-sidenav-nav" className={classNames} {...rest} />;
};

export default LayoutSidenavNav;
