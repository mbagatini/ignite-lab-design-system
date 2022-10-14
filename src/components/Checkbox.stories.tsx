import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Text } from './Text';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {},
	decorators: [(Story) => {
		return (
			<label className='flex gap-2 items-center'>
				{Story()}
				<Text size='sm' asChild>I agree with the terms</Text>
			</label>
		)
	}]
} as Meta;

// Must export at least one variant
export const Default: StoryObj = {}
