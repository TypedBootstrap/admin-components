import React from 'react';
import {
    LayoutSidenav,
    LayoutSidenavContent,
    LayoutSidenavNav,
    Wrapper,
    WrapperProps
} from '../../atoms';

export interface DefaultLayoutProps extends WrapperProps {
    footer: React.ReactNode;
    navFixed?: boolean;
    sidenav: React.ReactNode;
    sidenavToggled?: boolean;
    topnav: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
    const { children, footer, sidenav, topnav, ...rest } = props;

    return (
        <Wrapper {...rest}>
            {topnav}
            <LayoutSidenav>
                <LayoutSidenavNav>{sidenav}</LayoutSidenavNav>
                <LayoutSidenavContent>
                    <main>{children}</main>
                    {footer}
                </LayoutSidenavContent>
            </LayoutSidenav>
        </Wrapper>
    );
};

export default DefaultLayout;
