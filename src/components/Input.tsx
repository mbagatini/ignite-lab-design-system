import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
	children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
	return (
		<div className="flex gap-3 items-center w-full py-3 px-4 bg-gray-800 focus-within:ring-2 ring-cyan-500 rounded">
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

export const Input = {
	Root: InputRoot,
	Input: InputInput,
}