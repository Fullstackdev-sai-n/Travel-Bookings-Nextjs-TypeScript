import React, { ButtonHTMLAttributes } from "react";
import Icon from "./Icon";
import Star from "../assets/starblack.svg";

type ButtonVariant =
	| "primary"
	| "secondary"
	| "outlined"
	| "indicator"
	| "starBtn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant;
	bestValue?: Boolean;
	className?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	bestValue,
	className,
	onClick,
	...rest
}) => {
	const getButtonClasses = (dynamicClass: any) => {
		switch (variant) {
			case "primary":
				return "py-2 px-4 bg-primary text-white rounded-xl hover:bg-secondary hover:transition-all";
			case "secondary":
				return "py-2 px-4 bg-secondary text-white rounded-xl hover:bg-secondary hover:transition-all";
			case "outlined":
				return "py-2 px-4 border-2 border-prime text-black rounded-xl font-bold";
			case "starBtn":
				return "bg-grayPrimary text-black rounded-full flex";
			case "indicator":
				return dynamicClass
					? "py-2 px-4 bg-indicator1 text-black rounded-xl"
					: "py-2 px-4 bg-indicator2 text-black rounded-xl";
			default:
				return "py-2 px-4 bg-none text-white hover:bg-secondary hover:transition-all";
		}
	};

	return (
		<button
			onClick={onClick}
			className={`${
				variant === "indicator" && "flex w-32 text-xs transiti"
			} ${getButtonClasses(bestValue)} ${className}`}
			{...rest}>
			{variant === "indicator" && (
				<div
					className={
						bestValue
							? `w-2 h-2 rounded-full bg-green-500 mr-3  mt-1`
							: `w-2 h-2 rounded-full bg-primary mr-3 mt-1`
					}></div>
			)}
			{variant === "starBtn" && (
				<Icon imageClass="w-3 h-3 mr-3" src={Star} alt="star-icon" />
			)}
			{children}
		</button>
	);
};

export default Button;
