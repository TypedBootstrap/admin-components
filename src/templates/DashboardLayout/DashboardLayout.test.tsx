import React from 'react';
import { render } from '@testing-library/react';
import DashboardLayout from './DashboardLayout';

describe('DashboardLayout', () => {
    test('renders without crashing', () => {
        render(
            <DashboardLayout
                topnav={<div>Topnav</div>}
                sidenav={<div>Sidenav</div>}
                footer={<div>Footer</div>}
            />
        );
    });
});
