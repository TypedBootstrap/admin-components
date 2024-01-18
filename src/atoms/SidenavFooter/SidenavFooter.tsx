import React from 'react';
import classnames from 'classnames';

export interface SidenavFooterProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SidenavFooter: React.FC<SidenavFooterProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames('sidenav-footer', className);

    return <div className={classNames} {...rest} />;
};

export default SidenavFooter;
