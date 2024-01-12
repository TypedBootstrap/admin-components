import React from 'react';
import { SidenavFooter } from '../../atoms';

export interface SidenavUserFooterProps {
    name?: string;
}

const SidenavUserFooter: React.FC<SidenavUserFooterProps> = props => {
    const { name } = props;

    return (
        <SidenavFooter>
            <div className="small">Logged in as:</div>
            {name}
        </SidenavFooter>
    );
};

export default SidenavUserFooter;
