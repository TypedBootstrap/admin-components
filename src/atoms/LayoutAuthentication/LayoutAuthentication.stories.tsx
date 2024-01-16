import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LayoutAuthenticationContent from '../LayoutAuthenticationContent';
import LayoutAuthenticationFooter from '../LayoutAuthenticationFooter';
import LayoutAuthentication from './LayoutAuthentication';

const meta: Meta<typeof LayoutAuthentication> = {
    title: 'Atoms/LayoutAuthentication',
    component: LayoutAuthentication,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {},
    render: args => (
        <LayoutAuthentication {...args}>
            <LayoutAuthenticationContent>Content</LayoutAuthenticationContent>
            <LayoutAuthenticationFooter>Footer</LayoutAuthenticationFooter>
        </LayoutAuthentication>
    )
};
