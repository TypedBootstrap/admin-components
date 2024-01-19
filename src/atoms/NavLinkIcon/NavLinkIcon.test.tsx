import React from 'react';
import { render } from '@testing-library/react';
import NavLinkIcon from './NavLinkIcon';

describe('NavLinkIcon', () => {
    test('renders without crashing', () => {
        render(<NavLinkIcon />);
    });
});
