import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export function Checkbox() {
	return (
		<CheckboxPrimitive.Root className='w-6 h-6 rounded bg-gray-800 p-[2px] text-cyan-500'>
			<CheckboxPrimitive.Indicator asChild className='w-5 h-5'>
				<Check weight='bold' />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}