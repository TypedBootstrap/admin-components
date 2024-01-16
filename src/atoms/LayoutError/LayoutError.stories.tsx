import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LayoutErrorContent from '../LayoutErrorContent';
import LayoutErrorFooter from '../LayoutErrorFooter';
import LayoutError from './LayoutError';

const meta: Meta<typeof LayoutError> = {
    title: 'Atoms/LayoutError',
    component: LayoutError,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {},
    render: args => (
        <LayoutError {...args}>
            <LayoutErrorContent>Content</LayoutErrorContent>
            <LayoutErrorFooter>Footer</LayoutErrorFooter>
        </LayoutError>
    )
};
