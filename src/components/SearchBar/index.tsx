import CustomInput from "@/elements/CustomInput";
import React from "react";
import Location from "../../assets/location.svg";
import Calender from "../../assets/calendar.svg";
import Load from "../../assets/ship.svg";
import Icon from "@/elements/Icon";
import ArrowRight from "../../assets/arrowright.svg";

const SearchBar = () => {
	const inputProps = [
		{
			placeHolderIcon: Location,
			placeholderText: "Origin, Port, City",
			onChange: () => {},
		},
		{
			placeHolderIcon: Location,
			placeholderText: "Destination, Port, City",
			onChange: () => {},
		},
		{
			placeHolderIcon: Calender,
			placeholderText: "13 April 2023",
			onChange: () => {},
		},
		{
			placeHolderIcon: Load,
			placeholderText: "Load",
			onChange: () => {},
			classname: "w-32",
		},
	];
	return (
		<div
			style={{ boxShadow: "var(--form-shadow)" }}
			className="px-3 py-1.5 bg-white rounded-xl w-full grid grid-cols-2 sm:grid-cols-2 lg:flex lg:justify-between">
			{inputProps.map((inputProp, index) => {
				return (
					<div key={index}>
						<CustomInput
							IconSrc={inputProp.placeHolderIcon}
							placeholderText={inputProp.placeholderText}
							onChange={inputProp.onChange}
							inputClass={inputProp.classname}
						/>
					</div>
				);
			})}
			<Icon src={ArrowRight} imageClass="" alt="arrow-right" />
		</div>
	);
};

export default SearchBar;
