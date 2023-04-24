import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import React from "react";

interface SideTextIcon {
	imageClass: string;
	src: string;
	alt: string;
	tag: string;
	text: string;
	textColor?: string;
	textClass?: string;
	block?: Boolean;
	elementRef?: any;
}

const SideTextIcon: React.FC<SideTextIcon> = ({
	imageClass,
	src,
	alt,
	tag,
	text,
	textColor,
	textClass,
	block,
	elementRef,
}) => {
	return (
		<div
			ref={elementRef}
			className={block ? "grid place-items-center" : "flex"}>
			<Icon
				imageClass={block ? `${imageClass} mb-4` : imageClass}
				src={src}
				alt={alt}
			/>
			<Typography color={textColor} className={textClass} tag={tag}>
				{text}
			</Typography>
		</div>
	);
};

export default SideTextIcon;
