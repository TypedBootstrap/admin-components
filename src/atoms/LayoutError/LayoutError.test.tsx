import React from 'react';
import { render } from '@testing-library/react';
import LayoutError from './LayoutError';

describe('LayoutError', () => {
    test('renders without crashing', () => {
        render(<LayoutError />);
    });
});
