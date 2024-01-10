import React from 'react';
import classnames from 'classnames';
import { LayoutSidenav, LayoutSidenavContent, LayoutSidenavNav } from '../../atoms';

export interface DefaultLayoutProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fixedNav?: boolean;
    footer: React.ReactNode;
    sidenav: React.ReactNode;
    sidenavToggled?: boolean;
    topnav: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
    const {
        children,
        className,
        fixedNav,
        footer,
        sidenav,
        sidenavToggled,
        topnav,
        ...rest
    } = props;

    const classNames: string = classnames(
        {
            'sb-nav-fixed': fixedNav,
            'sb-sidenav-toggled': sidenavToggled
        },
        className
    );

    return (
        <div className={classNames} {...rest}>
            {topnav}
            <LayoutSidenav>
                <LayoutSidenavNav>{sidenav}</LayoutSidenavNav>
                <LayoutSidenavContent>
                    <main>{children}</main>
                    {footer}
                </LayoutSidenavContent>
            </LayoutSidenav>
        </div>
    );
};

export default DefaultLayout;
