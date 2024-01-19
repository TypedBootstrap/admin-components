import React from 'react';
import { render } from '@testing-library/react';
import SidenavMenu from './SidenavMenu';

describe('SidenavMenu', () => {
    test('renders without crashing', () => {
        render(<SidenavMenu />);
    });
});
