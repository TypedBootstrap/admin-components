import React from 'react';
import { render } from '@testing-library/react';
import SidenavMenuNested from './SidenavMenuNested';

describe('SidenavMenuNested', () => {
    test('renders without crashing', () => {
        render(<SidenavMenuNested />);
    });
});
