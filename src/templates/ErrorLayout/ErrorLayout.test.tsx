import React from 'react';
import { render } from '@testing-library/react';
import ErrorLayout from './ErrorLayout';

describe('ErrorLayout', () => {
    test('renders without crashing', () => {
        render(<ErrorLayout footer={<div>Footer</div>} />);
    });
});
