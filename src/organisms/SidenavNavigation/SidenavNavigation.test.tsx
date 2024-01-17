import React from 'react';
import { render } from '@testing-library/react';
import SidenavNavigation from './SidenavNavigation';

describe('SidenavNavigation', () => {
    test('renders without crashing', () => {
        render(<SidenavNavigation items={[]} />);
    });
});
