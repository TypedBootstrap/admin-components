import React from 'react';
import classnames from 'classnames';

export interface LayoutErrorFooterProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutErrorFooter: React.FC<LayoutErrorFooterProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layoutError_footer" className={classNames} {...rest} />;
};

export default LayoutErrorFooter;
