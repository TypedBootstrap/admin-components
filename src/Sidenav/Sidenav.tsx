import React from 'react';
import classnames from 'classnames';

export interface SidenavProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    dark?: boolean;
    light?: boolean;
}

const Sidenav: React.FC<SidenavProps> = props => {
    const { className, dark, light, ...rest } = props;

    const classNames: string = classnames(
        'sb-sidenav',
        {
            'sb-sidenav-dark': dark,
            'sb-sidenav-light': light
        },
        className
    );

    return <nav className={classNames} {...rest} />;
};

export default Sidenav;
