import React from 'react';
import classnames from 'classnames';

export interface LayoutAuthenticationContentProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutAuthenticationContent: React.FC<LayoutAuthenticationContentProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layout-authentication-content" className={classNames} {...rest} />;
};

export default LayoutAuthenticationContent;
