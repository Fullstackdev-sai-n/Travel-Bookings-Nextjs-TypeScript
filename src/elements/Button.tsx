import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	...rest
}) => {
	const getButtonClasses = () => {
		switch (variant) {
			case "primary":
				return "bg-blue-500 text-white";
			case "secondary":
				return "bg-none text-black";
			default:
				return "bg-blue-500 text-white";
		}
	};

	return (
		<button className={`py-2 px-4 rounded ${getButtonClasses()}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
