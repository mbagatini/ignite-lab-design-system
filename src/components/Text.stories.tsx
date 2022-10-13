import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
	title: 'Components/Text',
	component: Text,
	args: {
		children: 'Lorem ipsum'
	}
} as Meta<TextProps>;

// Must export at least one variant
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
	args: { size: 'sm' }
}

export const Large: StoryObj<TextProps> = {
	args: { size: 'lg' }
}

export const Custom: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: (
			<p>Paragraph</p>
		)
	},
	argTypes: {
		// Disable control for proprierties user is not supposed to modify
		children: {
			table: {
				disable: true
			}
		},
		asChild: {
			table: {
				disable: true
			}
		},
	}
}