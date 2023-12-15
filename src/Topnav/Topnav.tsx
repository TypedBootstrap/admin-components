import React from 'react';
import classnames from 'classnames';

export interface TopnavProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    bg?: string;
    dark?: boolean;
    light?: boolean;
}

const Topnav: React.FC<TopnavProps> = props => {
    const { bg, className, dark, light, ...rest } = props;

    const classNames: string = classnames(
        'sb-topnav',
        'navbar',
        'navbar-expand',
        {
            [`bg-${bg}`]: bg,
            'navbar-dark': dark,
            'navbar-light': light
        },
        className
    );

    return <nav className={classNames} {...rest} />;
};

export default Topnav;
