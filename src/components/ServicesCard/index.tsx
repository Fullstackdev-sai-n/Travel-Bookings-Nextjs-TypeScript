import React from "react";
import SideTextIcon from "../SideTextIcon";
import Typography from "@/elements/Typography";

interface ServicesCardTypes {
	description: string;
	icon: string;
	textheading: string;
	headingClass: string;
	tag: string;
}

const ServicesCard: React.FC<ServicesCardTypes> = ({
	description,
	textheading,
	icon,
	headingClass,
	tag,
}) => {
	return (
		<div className="w-full py-12 sm:py-7 px-6 bg-white rounded-2xl ml">
			<SideTextIcon
				src={icon}
				imageClass="w-8 h-8"
				alt="Icon"
				tag={tag}
				text={textheading}
				textClass={headingClass}
			/>
			<div className="w-full h-px bg-prime my-5"></div>
			<Typography color="var(--text-gray-dark)" tag="title03">
				{description}
			</Typography>
		</div>
	);
};

export default ServicesCard;
