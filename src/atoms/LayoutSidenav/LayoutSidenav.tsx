import React from 'react';
import classnames from 'classnames';

export interface LayoutSidenavProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutSidenav: React.FC<LayoutSidenavProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layout-sidenav" className={classNames} {...rest} />;
};

export default LayoutSidenav;
