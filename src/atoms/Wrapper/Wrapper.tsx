import React from 'react';
import classnames from 'classnames';

export interface WrapperProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sidenavToggled?: boolean;
    topnavFixed?: boolean;
}

const Wrapper: React.FC<WrapperProps> = props => {
    const { className, topnavFixed, sidenavToggled, ...rest } = props;

    const classNames: string = classnames(
        {
            'topnav-fixed': topnavFixed,
            'sidenav-toggled': sidenavToggled
        },
        className
    );

    return <div className={classNames} {...rest} />;
};

export default Wrapper;
