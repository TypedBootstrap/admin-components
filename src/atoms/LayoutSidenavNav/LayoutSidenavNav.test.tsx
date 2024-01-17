import React from 'react';
import { render } from '@testing-library/react';
import LayoutSidenavNav from './LayoutSidenavNav';

describe('LayoutSidenavNav', () => {
    test('renders without crashing', () => {
        render(<LayoutSidenavNav />);
    });
});
