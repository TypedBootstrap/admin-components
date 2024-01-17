import React from 'react';
import { render } from '@testing-library/react';
import LayoutAuthenticationFooter from './LayoutAuthenticationFooter';

describe('LayoutAuthenticationFooter', () => {
    test('renders without crashing', () => {
        render(<LayoutAuthenticationFooter />);
    });
});
