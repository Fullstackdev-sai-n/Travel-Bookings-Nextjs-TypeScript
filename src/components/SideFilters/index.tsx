import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import React from "react";
import Dropdown from "../../assets/arrowdown2.svg";

interface SideFilters {
	heading: string;
	filtersData: any;
	handleDropDown?: () => void;
}

const SideFilters: React.FC<SideFilters> = ({
	heading,
	handleDropDown,
	filtersData,
}) => {
	return (
		<div className="w-full">
			<Typography className="mb-10 text-black" tag="title03bold">
				{heading}
			</Typography>
			<div className="flex justify-between md:justify-normal md:block">
				{filtersData.map((filter: any, index: string | number) => {
					return (
						<div key={index} className="flex justify-between mb-7">
							<Typography className="mb-10 text-black" tag="title03bold">
								{filter?.name}
							</Typography>
							<Typography className="mb-10" tag="title03bold">
								<Icon
									handleImageClick={handleDropDown}
									alt="dropdown-icon"
									src={Dropdown}
									imageClass="w-4 h-4"
								/>
							</Typography>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideFilters;
