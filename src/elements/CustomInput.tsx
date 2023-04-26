import SideTextIcon from "@/components/SideTextIcon";
import React, { InputHTMLAttributes, useRef, ChangeEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	IconSrc: string;
	placeholderText: string;
	inputClass?: string;
	inputContainer?: string;
	type: string;
	value?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({
	IconSrc,
	placeholderText,
	onChange,
	inputClass,
	inputContainer,
	type,
	value,
	...props
}) => {
	const element = useRef(null);
	return (
		<div className={`relative z-50 px-7 ${inputContainer}`}>
			<input
				className={`w-32 bg-none sm:max-w-xs md:w-full border-none outline-none h-14 text-gray-400 font-normal text-xl border-r-primary ${inputClass}`}
				onChange={onChange}
				type={type}
				value={value}
				placeholder=""
				onFocus={(event) => {
					if (event && element.current)
						element.current.getElementsByTagName("div")[1].style.display =
							"none";
				}}
				{...props}
			/>
			<div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
				<SideTextIcon
					elementRef={element}
					src={IconSrc}
					imageClass="w-5 h-5"
					alt="Icon"
					tag="title02"
					text={placeholderText}
					textClass="text-gray-400 pl-2"
				/>
			</div>
		</div>
	);
};

export default CustomInput;
