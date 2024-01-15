import React, { useState } from 'react';
import Sidenav, { SidenavProps } from '../../atoms/Sidenav';
import SidenavMenu from '../../atoms/SidenavMenu';
import SidenavMenuHeading from '../../atoms/SidenavMenuHeading';
import SidenavSubmenu from '../../molecules/SidenavSubmenu';
import SidenavLink from '../../molecules/SidenavLink';

export type SidenavNavigationItem = {
    [key: string]: any;
    heading?: string;
    name?: string;
    icon?: React.ReactNode;
    submenu?: SidenavNavigationItems;
};

export type SidenavNavigationItems = Array<SidenavNavigationItem>;

export interface SidenavNavigationProps extends SidenavProps {
    footer?: React.ReactNode;
    items: SidenavNavigationItems;
}

const SidenavNavigation: React.FC<SidenavNavigationProps> = props => {
    const { footer, items, ...rest } = props;

    const [collapse, setCollapse] = useState({} as { [index: string]: boolean });

    const toggleCollapse = (itemName: string): void => {
        for (let c in collapse) {
            if (collapse[c] === true && c !== itemName) {
                setCollapse({ ...collapse, [c]: false });
            }
        }

        setCollapse({ ...collapse, [itemName]: !collapse[itemName] });
    };

    const renderMenu = (items: SidenavNavigationItems) => {
        return (
            <React.Fragment>
                {items.map((item, index) => {
                    const { heading, name, submenu, ...rest } = item;

                    if (heading) {
                        return <SidenavMenuHeading key={index}>{heading}</SidenavMenuHeading>;
                    }

                    if (!submenu) {
                        return (
                            <SidenavLink key={index} {...rest}>
                                {name}
                            </SidenavLink>
                        );
                    }

                    if (submenu && name) {
                        return (
                            <React.Fragment key={index}>
                                <SidenavLink onClick={() => toggleCollapse(name!)} {...rest}>
                                    {name}
                                </SidenavLink>
                                <SidenavSubmenu isOpen={collapse[name]}>
                                    {renderMenu(submenu)}
                                </SidenavSubmenu>
                            </React.Fragment>
                        );
                    }

                    return null;
                })}
            </React.Fragment>
        );
    };

    return (
        <Sidenav {...rest}>
            <SidenavMenu>{renderMenu(items)}</SidenavMenu>
            {footer}
        </Sidenav>
    );
};

export default SidenavNavigation;
