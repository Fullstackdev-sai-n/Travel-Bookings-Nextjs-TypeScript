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
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	bestValue,
	className,
	...rest
}) => {
	const getButtonClasses = (dynamicClass: any) => {
		switch (variant) {
			case "primary":
				return "bg-primary text-white rounded-xl";
			case "secondary":
				return "bg-secondary text-white rounded-xl";
			case "outlined":
				return "border-2 border-prime text-black rounded-xl font-bold";
			case "starBtn":
				return "bg-grayPrimary rounder-full text-black rounded-full";
			case "indicator":
				return dynamicClass
					? "bg-indicator1 text-black rounded-xl"
					: "bg-indicator2 text-black rounded-xl";
			default:
				return "bg-none text-white";
		}
	};

	return (
		<button
			className={`py-2 px-4 ${
				variant === "indicator" && "flex"
			} ${getButtonClasses(bestValue)} ${className}`}
			{...rest}>
			{variant === "indicator" && (
				<div
					className={
						bestValue
							? `w-2 h-2 rounded-full bg-green-500 m-auto mr-3`
							: `w-2 h-2 rounded-full bg-primary m-auto mr-3`
					}></div>
			)}
			{variant === "starBtn" && (
				<Icon imageClass="w-3 h-3 m-auto mr-3" src={Star} alt="star-icon" />
			)}
			{children}
		</button>
	);
};

export default Button;
