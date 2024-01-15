import React from 'react';
import { Collapse, CollapseProps } from 'reactstrap';
import SidenavMenuNested from '../../atoms/SidenavMenuNested';

export interface SidenavSubmenuProps extends CollapseProps {}

const SidenavSubmenu: React.FC<SidenavSubmenuProps> = props => {
    const { children, ...rest } = props;

    return (
        <Collapse {...rest}>
            <SidenavMenuNested>{children}</SidenavMenuNested>
        </Collapse>
    );
};

export default SidenavSubmenu;
