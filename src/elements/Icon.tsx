import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconProps {
	imageClass?: string;
	src: string | StaticImageData;
	alt: string;
	containerClass?: string;
	handleImageClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
	imageClass,
	src,
	alt,
	containerClass,
	handleImageClick,
}) => {
	return (
		<div className={containerClass} onClick={handleImageClick}>
			<Image className={imageClass} src={src} alt={alt} />
		</div>
	);
};

export default Icon;
