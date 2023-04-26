import Typography from "@/elements/Typography";
import React from "react";

const TabIndex = () => {
	return (
		<div className="hover:py-0 bg-lightBlue w-full grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-3 rounded-xl">
			<Typography
				tag="bodysemibold"
				containerClass="hover:text-secondary text-grayLight hover:bg-white hover:rounded-xl text-center py-1 sm:py-3"
				className="  px-4 cursor-pointer">
				Best Value 5-5 days. $3,121
			</Typography>
			<Typography
				tag="bodysemibold"
				containerClass="hover:text-secondary text-grayLight hover:bg-white hover:rounded-xl text-center py-1 sm:py-3"
				className="  px-4 cursor-pointer">
				Best Value 5-5 days. $3,121
			</Typography>
			<Typography
				tag="bodysemibold"
				containerClass="hover:text-secondary text-grayLight hover:bg-white hover:rounded-xl text-center py-1 sm:py-3"
				className="  px-4 cursor-pointer">
				Best Value 5-5 days. $3,121
			</Typography>
		</div>
	);
};

export default TabIndex;
