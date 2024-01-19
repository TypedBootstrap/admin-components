import React from 'react';
import { render } from '@testing-library/react';
import LayoutSidenavContent from './LayoutSidenavContent';

describe('LayoutSidenavContent', () => {
    test('renders without crashing', () => {
        render(<LayoutSidenavContent />);
    });
});
