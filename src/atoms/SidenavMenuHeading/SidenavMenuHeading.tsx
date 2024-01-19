import React from 'react';
import classnames from 'classnames';

export interface SidenavMenuHeadingProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SidenavMenuHeading: React.FC<SidenavMenuHeadingProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames('sidenav-menu-heading', className);

    return <div className={classNames} {...rest} />;
};

export default SidenavMenuHeading;
