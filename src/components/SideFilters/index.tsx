import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import React from "react";
import Dropdown from "../../assets/arrowdown2.svg";

interface SideFilters {
	title: string;
	heading: string;
}

const SideFilters: React.FC<SideFilters> = ({ heading, title }) => {
	return (
		<div className="w-full">
			<Typography className="mb-10" tag="title03bold">
				{heading}
			</Typography>
			{Array.from({ length: 4 }, (__, index) => {
				return (
					<div key={index} className="flex justify-between mb-7">
						<Typography className="mb-10 text-black" tag="title03bold">
							{title}
						</Typography>
						<Typography className="mb-10" tag="title03bold">
							<Icon alt="dropdown-icon" src={Dropdown} imageClass="w-4 h-4" />
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

export default SideFilters;
