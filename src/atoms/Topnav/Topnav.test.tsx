import React from 'react';
import { render } from '@testing-library/react';
import Topnav from './Topnav';

describe('Topnav', () => {
    test('renders without crashing', () => {
        render(<Topnav />);
    });
});
