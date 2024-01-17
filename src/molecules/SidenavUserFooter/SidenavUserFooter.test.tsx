import React from 'react';
import { render } from '@testing-library/react';
import SidenavUserFooter from './SidenavUserFooter';

describe('SidenavUserFooter', () => {
    test('renders without crashing', () => {
        render(<SidenavUserFooter />);
    });
});
