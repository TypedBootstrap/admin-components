import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
    test('renders without crashing', () => {
        render(<Wrapper />);
    });
});
