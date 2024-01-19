import React from 'react';
import { render } from '@testing-library/react';
import SidenavLink from './SidenavLink';

describe('SidenavLink', () => {
    test('renders without crashing', () => {
        render(<SidenavLink />);
    });
});
