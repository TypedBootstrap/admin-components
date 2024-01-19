import React from 'react';
import { render } from '@testing-library/react';
import SidenavSubmenu from './SidenavSubmenu';

describe('SidenavSubmenu', () => {
    test('renders without crashing', () => {
        render(<SidenavSubmenu />);
    });
});
