import SideTextIcon from "@/components/SideTextIcon";
import React, { InputHTMLAttributes, useRef, ChangeEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	IconSrc: string;
	placeholderText: string;
	inputClass?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<InputProps> = ({
	IconSrc,
	placeholderText,
	onChange,
	inputClass,
	...props
}) => {
	const element = useRef(null);
	return (
		<div className="relative">
			<input
				className={`w-32 sm:max-w-xs sm:w-full border-none outline-none h-14 text-gray-400 ml-9 font-normal text-xl ${inputClass}`}
				onChange={onChange}
				onFocus={(event) => {
					if (event && element.current)
						element.current.getElementsByTagName("title02")[0].style.display =
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
