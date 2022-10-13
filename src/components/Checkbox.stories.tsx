import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Text } from './Text';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {},
	decorators: [(Story) => {
		return (
			<div className='flex gap-2 items-center'>
				{Story()}
				<Text size='sm'>I agree with the terms</Text>
			</div>
		)
	}]
} as Meta;

// Must export at least one variant
export const Default: StoryObj = {}
