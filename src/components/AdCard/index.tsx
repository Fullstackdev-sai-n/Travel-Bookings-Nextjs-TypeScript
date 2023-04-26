import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import React from "react";

interface AdCardProps {
	adSrc: string;
	adTitle: string;
	imageClass: string;
}

const AdCard: React.FC<AdCardProps> = ({ adSrc, adTitle, imageClass }) => {
	return (
		<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary">
			<Typography
				color="#5C5C5C"
				className="text-black mb-2"
				tag="title02semibold">
				{adTitle}
			</Typography>
			<div className="grid place-items-center my-9">
				<div className="">
					<Icon imageClass={imageClass} src={adSrc} alt="AdOne" />
				</div>
			</div>
		</div>
	);
};

export default AdCard;
