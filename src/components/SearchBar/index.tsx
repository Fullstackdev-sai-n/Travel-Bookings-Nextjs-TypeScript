import CustomInput from "@/elements/CustomInput";
import React, { useState } from "react";
import Location from "../../assets/location.svg";
import Calender from "../../assets/calendar.svg";
import Load from "../../assets/ship.svg";
import Icon from "@/elements/Icon";
import ArrowRight from "../../assets/arrowright.svg";
import EditBtn from "../../assets/edit.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

interface ProgressProps {
	edit?: Boolean;
}

const SearchBar: React.FC<ProgressProps> = ({ edit }) => {
	// const [startDate, setStartDate] = useState(new Date());
	const inputProps = [
		{
			placeHolderIcon: Location,
			placeholderText: "Origin, Port, City",
			type: "text",
			value: "",
			onChange: () => {},
		},
		{
			placeHolderIcon: Location,
			placeholderText: "Destination, Port, City",
			inputContainer: "lg:border-r-primary",
			type: "text",
			value: "",
			onChange: () => {},
		},
		{
			placeHolderIcon: Calender,
			placeholderText: "13 April 2023",
			inputContainer: "lg:border-r-primary",
			classname: "",
			type: "date",
			value: "",
			onChange: () => {},
		},
		{
			placeHolderIcon: Load,
			placeholderText: "Load",
			onChange: () => {},
			classname: "w-32",
			type: "text",
			value: "",
			inputContainer: "lg:border-r-primary",
		},
	];
	return (
		<>
			<div className="shadow-form px-3 py-1.5 bg-white rounded-xl sm:w-full grid grid-cols-2 sm:grid-cols-2 lg:flex lg:justify-between">
				{inputProps.map((inputProp, index) => {
					return (
						<div key={index}>
							<CustomInput
								type={inputProp.type}
								value={inputProp.value}
								IconSrc={inputProp.placeHolderIcon}
								placeholderText={inputProp.placeholderText}
								onChange={inputProp.onChange}
								inputClass={inputProp.classname}
								inputContainer={inputProp.inputContainer}
							/>
						</div>
					);
				})}
				<Icon
					imageClass={edit ? "mt-4 mr-4" : ""}
					src={edit ? EditBtn : ArrowRight}
					alt="arrow-right"
				/>
			</div>
		</>
	);
};

export default SearchBar;
