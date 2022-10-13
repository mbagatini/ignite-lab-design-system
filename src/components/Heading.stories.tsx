import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Lorem ipsum'
	}
} as Meta<HeadingProps>;

// Must export at least one variant
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
	args: { size: 'sm' }
}

export const Large: StoryObj<HeadingProps> = {
	args: { size: 'lg' }
}

export const Custom: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: (
			<h1>H1 heading</h1>
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