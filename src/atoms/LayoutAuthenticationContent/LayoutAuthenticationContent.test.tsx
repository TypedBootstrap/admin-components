import React from 'react';
import { render } from '@testing-library/react';
import LayoutAuthenticationContent from './LayoutAuthenticationContent';

describe('LayoutAuthenticationContent', () => {
    test('renders without crashing', () => {
        render(<LayoutAuthenticationContent />);
    });
});
