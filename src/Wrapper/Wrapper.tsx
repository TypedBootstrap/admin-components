import React from 'react';
import classnames from 'classnames';

export interface WrapperProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    navFixed?: boolean;
    sidenavToggled?: boolean;
}

const Wrapper: React.FC<WrapperProps> = props => {
    const { className, navFixed, sidenavToggled, ...rest } = props;

    const classNames: string = classnames(
        {
            'sb-nav-fixed': navFixed,
            'sb-sidenav-toggled': sidenavToggled
        },
        className
    );

    return <div className={classNames} {...rest} />;
};

export default Wrapper;
