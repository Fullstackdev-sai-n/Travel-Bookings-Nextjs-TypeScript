import Image from "next/image";
import React from "react";
import Icon from "./Icon";
import StarFill from "../assets/starfill.svg";
import StarEmpty from "../assets/star.svg";

interface StarRatingProps {
	rating: number; // Value of the rating// Path to the star icon image
	className: string;
	imageClass: string;
}

const StarRating: React.FC<StarRatingProps> = ({
	rating,
	className,
	imageClass,
}) => {
	return (
		<div className={className}>
			{[...Array(5)].map((_, index) => (
				<Icon
					key={index}
					src={index < rating ? StarFill : StarEmpty}
					alt={`Star ${index + 1}`}
					imageClass={imageClass}
				/>
			))}
		</div>
	);
};

export default StarRating;
