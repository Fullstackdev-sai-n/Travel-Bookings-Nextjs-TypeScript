import Typography from "@/elements/Typography";
import React, { Fragment } from "react";

interface ProgressProps {
	currentStep: number;
	totalSteps?: number;
}

const ProgressText = ["Search", "Recommended sercvices", "Results", "Booking"];

const Progress: React.FC<ProgressProps> = ({ currentStep, totalSteps }) => {
	const circles = ProgressText.map((list, index) => (
		<Fragment key={index}>
			<div className="mr-28">
				<div
					className={`relative w-7 h-7 text-base text-white rounded-full grid place-items-center ${
						index < currentStep ? "bg-secondary" : "bg-grayPrimary"
					}`}>
					{index + 1}
				</div>
				<Typography
					tag="captions"
					className={`text-black mt-2 sm:whitespace-nowrap text-center ${
						index === 1 && "-ml-6"
					}`}>
					{list}
				</Typography>
			</div>
			<div
				className={
					index === 3
						? "hidden"
						: `w-16 progress-bar sm:w-32 h-0.5 bg-prime mt-4`
				}></div>
		</Fragment>
	));

	return <div className="grid relative grid-cols-progress">{circles}</div>;
};

export default Progress;
