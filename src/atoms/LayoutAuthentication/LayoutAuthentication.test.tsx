import React from 'react';
import { render } from '@testing-library/react';
import LayoutAuthentication from './LayoutAuthentication';

describe('LayoutAuthentication', () => {
    test('renders without crashing', () => {
        render(<LayoutAuthentication />);
    });
});
