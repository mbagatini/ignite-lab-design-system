import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
	children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
	return (
		<div className="flex gap-3 items-center w-full h-12 py-3 px-4 bg-gray-800 focus-within:ring-2 ring-cyan-500 rounded">
			{children}
		</div>
	)
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

function InputInput(props: InputProps) {
	return (
		<input {...props} className="flex-1 outline-none bg-transparent text-gray-100 rounded placeholder:text-gray-400" />
	)
}

export interface InputIconProps {
	children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
	return (
		<Slot className='w-6 h-6 text-gray-400'>
			{children}
		</Slot>
	)
}

export const Input = {
	Root: InputRoot,
	Input: InputInput,
	Icon: InputIcon,
}