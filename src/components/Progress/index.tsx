import Typography from "@/elements/Typography";
import React from "react";

interface ProgressProps {
	currentStep: number;
	totalSteps: number;
}

const ProgressText = ["Search", "Recommended sercvices", "Results", "Booking"];

const Progress: React.FC<ProgressProps> = ({ currentStep, totalSteps }) => {
	const circles = ProgressText.map((list, index) => (
		<>
			<div className="mr-28" key={index}>
				<div
					className={`relative w-7 h-7 text-base text-white rounded-full grid place-items-center ${
						index < currentStep ? "bg-secondary" : "bg-grayPrimary"
					}`}>
					{index + 1}
				</div>
				<Typography tag="captions" className="text-black mt-2">
					{list}
				</Typography>
			</div>
			<div className="w-32 h-0.5 bg-black"></div>
		</>
	));

	return (
		<div
			style={{ gridTemplateColumns: "50px 1fr 50px 1fr 50px 1fr 50px 1fr" }}
			className="grid relative">
			{/* <div className="w-full h-0.5 bg-grayPrimary absolute"></div> */}
			{circles}
		</div>
	);
};

export default Progress;
