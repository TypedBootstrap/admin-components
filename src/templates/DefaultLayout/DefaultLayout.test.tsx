import React from 'react';
import { render } from '@testing-library/react';
import DefaultLayout from './DefaultLayout';

describe('DefaultLayout', () => {
    test('renders without crashing', () => {
        render(
            <DefaultLayout
                topnav={<div>Topnav</div>}
                sidenav={<div>Sidenav</div>}
                footer={<div>Footer</div>}
            />
        );
    });
});
