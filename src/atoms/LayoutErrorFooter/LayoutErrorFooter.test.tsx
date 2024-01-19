import React from 'react';
import { render } from '@testing-library/react';
import LayoutErrorFooter from './LayoutErrorFooter';

describe('LayoutErrorFooter', () => {
    test('renders without crashing', () => {
        render(<LayoutErrorFooter />);
    });
});
