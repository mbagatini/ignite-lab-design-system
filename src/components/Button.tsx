export interface ButtonProps {
	children: string;
}

export function Button({ children }: ButtonProps) {
	return (
		<button className="text-black px-3 py-4 rounded font-semibold w-full bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white">
			{children}
		</button>
	)
}