import React from 'react';
import classnames from 'classnames';

export interface FooterProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    bg?: string;
}

const Footer: React.FC<FooterProps> = props => {
    const { bg, className, ...rest } = props;

    const classNames: string = classnames(
        {
            [`bg-${bg}`]: bg
        },
        className
    );

    return <footer className={classNames} {...rest} />;
};

export default Footer;
