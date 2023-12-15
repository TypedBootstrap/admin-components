import React from 'react';
import classnames from 'classnames';

export interface SidenavMenuProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SidenavMenu: React.FC<SidenavMenuProps> = props => {
    const { className, children, ...rest } = props;

    const classNames: string = classnames('sb-sidenav-menu', className);

    return (
        <div className={classNames} {...rest}>
            <div className="nav">{children}</div>
        </div>
    );
};

export default SidenavMenu;
