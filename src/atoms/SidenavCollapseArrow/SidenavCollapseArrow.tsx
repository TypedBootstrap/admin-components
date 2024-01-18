import React from 'react';
import classnames from 'classnames';

export interface SidenavCollapseArrowProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SidenavCollapseArrow: React.FC<SidenavCollapseArrowProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames('sidenav-collapse-arrow', className);

    return <div className={classNames} {...rest} />;
};

export default SidenavCollapseArrow;
