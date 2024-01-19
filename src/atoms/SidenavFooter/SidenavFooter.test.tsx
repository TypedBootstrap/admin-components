import React from 'react';
import { render } from '@testing-library/react';
import SidenavFooter from './SidenavFooter';

describe('SidenavFooter', () => {
    test('renders without crashing', () => {
        render(<SidenavFooter />);
    });
});
