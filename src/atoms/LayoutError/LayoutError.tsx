import React from 'react';
import classnames from 'classnames';

export interface LayoutErrorProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LayoutError: React.FC<LayoutErrorProps> = props => {
    const { className, ...rest } = props;

    const classNames: string = classnames(className);

    return <div id="layoutError" className={classNames} {...rest} />;
};

export default LayoutError;
