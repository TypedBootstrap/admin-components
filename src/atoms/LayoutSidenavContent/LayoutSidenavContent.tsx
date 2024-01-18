import React from 'react';
import classnames from 'classnames';

export interface LayoutSidenavContentProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutSidenavContent: React.FC<LayoutSidenavContentProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layout-sidenav-content" className={classNames} {...rest} />;
};

export default LayoutSidenavContent;
