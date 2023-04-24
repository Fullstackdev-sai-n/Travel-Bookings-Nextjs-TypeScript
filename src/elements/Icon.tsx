import Image from "next/image";
import React from "react";

interface IconProps {
	imageClass: string;
	src: string;
	alt: string;
}

const Icon: React.FC<IconProps> = ({ imageClass, src, alt }) => {
	return <Image className={imageClass} src={src} alt={alt} />;
};

export default Icon;
