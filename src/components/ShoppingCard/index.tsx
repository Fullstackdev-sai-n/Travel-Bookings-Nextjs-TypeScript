import Button from "@/elements/Button";
import Typography from "@/elements/Typography";
import React from "react";
import SideTextIcon from "../SideTextIcon";
import Location from "../../assets/location.svg";
import Plane from "../../assets/plane.svg";
import Prime from "../../assets/prime.svg";

import Icon from "@/elements/Icon";
import StarRating from "@/elements/Rating";

interface ShoppingCardProps {
	isVariant: Boolean;
	heading: string;
	indicatorText: string;
	estDays: Number;
	totalPrice: Number;
	startText: string;
	destinationText: string;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({
	isVariant,
	indicatorText,
	estDays,
	totalPrice,
	startText,
	destinationText,
}) => {
	return (
		<div
			style={{ gridTemplateColumns: "1fr 0.2fr" }}
			className="shadow-shoppingCard py-5 px-7 rounded-xl block sm:grid bg-white mb-5">
			<div className="sm:border-r-primary">
				<div className="mb-5 flex justify-between max-w-xs">
					<Button variant="indicator" bestValue={isVariant}>
						{indicatorText}
					</Button>
					<Typography className="text-red mt-4 ml-4" tag="body">
						Express
					</Typography>
					<div className="w-0.5 h-4 mt-4 ml-4  bg-grayPrimary"></div>
					<Typography className="text-gray-500 mt-4 ml-4" tag="captions">
						{`Est. ${estDays} days`}
					</Typography>
				</div>
				<div className="mb-6 flex gap-3">
					<SideTextIcon
						src={Location}
						imageClass="w-4 h-4 mr-1"
						text={startText}
						textClass="text-graySecondary"
						tag="body"
						alt="location-icon"
					/>
					<div className="w-6 h-0.5 bg-grayPrimary mt-2"></div>
					<Icon src={Plane} imageClass="" alt="" />
					<div className="w-6 h-0.5 bg-grayPrimary mt-2"></div>
					<SideTextIcon
						src={Location}
						imageClass="w-4 h-4 mr-1"
						text={destinationText}
						textClass="text-graySecondary"
						tag="body"
						alt="location-icon"
					/>
				</div>
				<div className="flex">
					<SideTextIcon
						src={Prime}
						imageClass="w-6 h-4"
						text="Primetime worldwide"
						textClass="text-graySecondary ml-2"
						tag="captions"
						alt="location-icon"
					/>
					<StarRating imageClass="mr-1" className="flex ml-4" rating={3} />
				</div>
			</div>
			<div className="mt-4 sm:text-center">
				<Typography tag="title02bold" className="text-black mb-4">
					$ {totalPrice}
				</Typography>
				<Button variant="primary" className="rounded-full sm:m-auto w-32">
					Select
				</Button>
				<Typography tag="captions" className="text-black mt-2 mb-4 underline">
					View details
				</Typography>
			</div>
		</div>
	);
};

export default ShoppingCard;
