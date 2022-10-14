import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button {...rest} className={clsx("text-black px-4 py-3 rounded font-semibold w-full bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white", className)}>
			{children}
		</button>
	)
}