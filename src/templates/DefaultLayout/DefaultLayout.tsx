import React from 'react';
import {
    LayoutSidenav,
    LayoutSidenavContent,
    LayoutSidenavNav,
    Wrapper,
    WrapperProps
} from '../../atoms';

export interface DefaultLayoutProps {
    children?: React.ReactNode;
    footer: React.ReactNode;
    sidenav: React.ReactNode;
    sidenavToggled?: boolean;
    topnav: React.ReactNode;
    topnavFixed?: boolean;
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
