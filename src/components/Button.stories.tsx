import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Lorem ipsum'
	}
} as Meta<ButtonProps>;

// Must export at least one variant
export const Default: StoryObj<ButtonProps> = {}
