import React from 'react';
import { render } from '@testing-library/react';
import LayoutSidenav from './LayoutSidenav';

describe('LayoutSidenav', () => {
    test('renders without crashing', () => {
        render(<LayoutSidenav />);
    });
});
