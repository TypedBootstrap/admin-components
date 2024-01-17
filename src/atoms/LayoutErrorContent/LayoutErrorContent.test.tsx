import React from 'react';
import { render } from '@testing-library/react';
import LayoutErrorContent from './LayoutErrorContent';

describe('LayoutErrorContent', () => {
    test('renders without crashing', () => {
        render(<LayoutErrorContent />);
    });
});
