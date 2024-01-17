import React from 'react';
import { render } from '@testing-library/react';
import MinimalFooter from './MinimalFooter';

describe('MinimalFooter', () => {
    test('renders without crashing', () => {
        render(<MinimalFooter />);
    });
});
