import CustomInput from "@/elements/CustomInput";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Location from "../../assets/location.svg";
import Calender from "../../assets/calendar.svg";
import Load from "../../assets/ship.svg";
import Icon from "@/elements/Icon";
import ArrowRight from "../../assets/arrowright.svg";
import EditBtn from "../../assets/edit.svg";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

interface SearchBarProps {
	edit?: Boolean;
	initialValues?: any;
	filters?: any;
	editing?: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
	edit,
	initialValues,
	filters,
	editing,
}) => {
	const [origin, setOrigin] = useState(
		initialValues ? initialValues.origin : ""
	);
	const [destination, setDestination] = useState(
		initialValues ? initialValues.destination : ""
	);
	const [requiredDate, setRequiredDate] = useState(
		initialValues ? initialValues.requiredDate : ""
	);
	const [load, setLoad] = useState(initialValues ? initialValues.load : "");
	const [isEditing, setIsEditing] = useState(false);
	const dateRef = useRef(null);

	const router = useRouter();
	const now = new Date();
	const options: any = { day: "numeric", month: "long", year: "numeric" };
	const formattedDate = now.toLocaleDateString("en-US", options);

	let formData = {
		origin,
		destination,
		requiredDate,
		load,
	};

	useEffect(() => {
		setOrigin(initialValues && initialValues.origin);
		setDestination(initialValues && initialValues.destination);
		setRequiredDate(initialValues && initialValues.requiredDate);
		setLoad(initialValues && initialValues.load);
	}, [initialValues]);

	const inputProps = [
		{
			placeHolderIcon: Location,
			placeholderText: !initialValues && "Origin, Port, City",
			type: "text",
			value:
				initialValues && !isEditing
					? initialValues.origin
					: isEditing
					? formData.origin
					: formData.origin,
			onChange: (event: ChangeEvent<HTMLInputElement>) => {
				setOrigin(event.target.value);

				isEditing && filters(event.target.value);
			},
		},
		{
			placeHolderIcon: Location,
			placeholderText: !initialValues && "Destination, Port, City",
			inputContainer: "lg:border-r-primary",
			type: "text",
			value:
				initialValues && !isEditing
					? initialValues.destination
					: isEditing
					? formData.destination
					: formData.destination,
			onChange: (event: ChangeEvent<HTMLInputElement>) => {
				setDestination(event.target.value);
			},
		},
		{
			placeHolderIcon: Calender,
			placeholderText: !initialValues && formattedDate,
			placeholder: "Date New",
			inputContainer: "lg:border-r-primary relative",
			classname: "pl-4",
			calenderIcon: Calender,
			value:
				initialValues && !isEditing
					? initialValues.requiredDate
					: isEditing
					? formData.requiredDate
					: formData.requiredDate,
			ref: dateRef,
			id: "data-input",
			type: "date",
			textClass: "bg-white px-4",
			onChange: (event: ChangeEvent<HTMLInputElement>) => {
				setRequiredDate(event?.target?.value);
			},
		},
		{
			placeHolderIcon: Load,
			placeholderText: !initialValues && "Load",
			value:
				initialValues && !isEditing
					? initialValues.load
					: isEditing
					? formData.load
					: formData.load,
			onChange: (event: ChangeEvent<HTMLInputElement>) => {
				setLoad(event.target.value);
			},
			classname: "w-32",
			type: "text",
			inputContainer: "lg:border-r-primary",
		},
	];

	const submitClick = async (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		localStorage.setItem("formData", JSON.stringify(formData));
		router.push("/shipping");
	};
	const handleEdit = async () => {
		setIsEditing(true);
		editing();
	};

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
								containerRef={inputProp.ref}
								placeholder={inputProp.placeholder}
								textClass={inputProp.textClass}
								id={inputProp.id}
							/>
						</div>
					);
				})}
				<Icon
					imageClass={edit ? "mt-4 mr-4 cursor-pointer" : "mt-3 cursor-pointer"}
					src={edit ? EditBtn : ArrowRight}
					alt="arrow-right"
					handleImageClick={edit ? handleEdit : submitClick}
				/>
			</div>
		</>
	);
};

export default SearchBar;
