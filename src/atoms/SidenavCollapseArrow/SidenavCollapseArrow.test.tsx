import React from 'react';
import { render } from '@testing-library/react';
import SidenavCollapseArrow from './SidenavCollapseArrow';

describe('SidenavCollapseArrow', () => {
    test('renders without crashing', () => {
        render(<SidenavCollapseArrow />);
    });
});
