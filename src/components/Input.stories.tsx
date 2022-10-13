import { Meta, StoryObj } from '@storybook/react';
import { Input, InputRootProps } from './Input';

export default {
	title: 'Components/Input',
	component: Input.Root,
	args: {
		children: (
			<Input.Input placeholder='email@example.com' />
		)
	},
	argTypes: {
		// Disable control for proprierties user is not supposed to modify
		children: {
			table: {
				disable: true
			}
		}
	}
} as Meta<InputRootProps>;

// Must export at least one variant
export const Default: StoryObj<InputRootProps> = {}