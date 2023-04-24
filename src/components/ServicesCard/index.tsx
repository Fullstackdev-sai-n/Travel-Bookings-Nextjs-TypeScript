import React from "react";
import SideTextIcon from "../SideTextIcon";
import Typography from "@/elements/Typography";

interface ServicesCardTypes {
	description: string;
	icon: string;
	textheading: string;
}

const ServicesCard: React.FC<ServicesCardTypes> = ({
	description,
	textheading,
	icon,
}) => {
	return (
		<div className="w-full py-7 px-6 bg-white rounded-2xl ml">
			<SideTextIcon
				src={icon}
				imageClass="w-8 h-8"
				alt="Icon"
				tag="title01"
				text={textheading}
				textClass="text-gray-400 ml-7 text-black capitalize"
			/>
			<div className="w-full h-0.5 bg-gray-300 my-5"></div>
			<Typography color="var(--text-gray-dark)" tag="title03">
				{description}
			</Typography>
		</div>
	);
};

export default ServicesCard;
