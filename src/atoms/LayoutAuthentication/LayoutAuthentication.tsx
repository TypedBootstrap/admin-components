import React from 'react';
import classnames from 'classnames';

export interface LayoutAuthenticationProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutAuthentication: React.FC<LayoutAuthenticationProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layout-authentication" className={classNames} {...rest} />;
};

export default LayoutAuthentication;
