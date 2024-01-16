import React from 'react';
import classnames from 'classnames';

export interface LayoutAuthenticationFooterProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutAuthenticationFooter: React.FC<LayoutAuthenticationFooterProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layoutAuthentication_footer" className={classNames} {...rest} />;
};

export default LayoutAuthenticationFooter;
