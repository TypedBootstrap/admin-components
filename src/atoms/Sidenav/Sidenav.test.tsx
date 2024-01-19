import React from 'react';
import { render } from '@testing-library/react';
import Sidenav from './Sidenav';

describe('Sidenav', () => {
    test('renders without crashing', () => {
        render(<Sidenav />);
    });
});
