import Typography from "@/elements/Typography";
import React from "react";

interface TabIndex {
	tabData: any;
}

const TabIndex: React.FC<TabIndex> = ({ tabData }) => {
	const tabValue = tabData.map((tab: any, index: string | number) => {
		return (
			<div key={index}>
				<Typography
					tag="bodysemibold"
					containerClass={`${
						index === 0 && "bg-white rounded-xl text-secondary"
					} hover:text-secondary text-grayLight hover:bg-white hover:rounded-xl text-center py-1 sm:py-3`}
					className="  px-4 cursor-pointer">
					{tab.value}
				</Typography>
			</div>
		);
	});
	return (
		<div className="shadow-secondary hover:py-0 bg-lightBlue w-full grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-3 rounded-xl">
			{tabValue}
		</div>
	);
};

export default TabIndex;
