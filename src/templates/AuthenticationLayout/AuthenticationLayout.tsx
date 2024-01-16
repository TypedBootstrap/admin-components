import React from 'react';
import LayoutAuthentication from '../../atoms/LayoutAuthentication';
import LayoutAuthenticationContent from '../../atoms/LayoutAuthenticationContent';
import LayoutAuthenticationFooter from '../../atoms/LayoutAuthenticationFooter';

interface AuthenticationLayoutProps {
    children?: React.ReactNode;
    footer: React.ReactNode;
}

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = props => {
    const { children, footer } = props;

    return (
        <LayoutAuthentication>
            <LayoutAuthenticationContent>{children}</LayoutAuthenticationContent>
            <LayoutAuthenticationFooter>{footer}</LayoutAuthenticationFooter>
        </LayoutAuthentication>
    );
};

export default AuthenticationLayout;
