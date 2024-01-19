import React from 'react';
import { render } from '@testing-library/react';
import SidenavMenuHeading from './SidenavMenuHeading';

describe('SidenavMenuHeading', () => {
    test('renders without crashing', () => {
        render(<SidenavMenuHeading />);
    });
});
