import React from 'react';
import classnames from 'classnames';

export interface LayoutErrorContentProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutErrorContent: React.FC<LayoutErrorContentProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layout-error-content" className={classNames} {...rest} />;
};

export default LayoutErrorContent;
