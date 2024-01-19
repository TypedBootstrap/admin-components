import React from 'react';
import { render } from '@testing-library/react';
import AuthenticationLayout from './AuthenticationLayout';

describe('AuthenticationLayout', () => {
    test('renders without crashing', () => {
        render(<AuthenticationLayout footer={<div>Footer</div>} />);
    });
});
