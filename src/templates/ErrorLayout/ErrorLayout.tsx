import React from 'react';
import LayoutError from '../../atoms/LayoutError';
import LayoutErrorContent from '../../atoms/LayoutErrorContent';
import LayoutErrorFooter from '../../atoms/LayoutErrorFooter';

interface ErrorLayoutProps {
    children?: React.ReactNode;
    footer: React.ReactNode;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = props => {
    const { children, footer } = props;

    return (
        <LayoutError>
            <LayoutErrorContent>{children}</LayoutErrorContent>
            <LayoutErrorFooter>{footer}</LayoutErrorFooter>
        </LayoutError>
    );
};

export default ErrorLayout;
