import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import React from "react";
import Plane from "../../assets/Plane icon.svg";
import Travel from "../../assets/icon-1.svg";
import Weight from "../../assets/weightmeter.svg";
import Load from "../../assets/Vector 3.svg";
import AdOne from "../../assets/Frame 64.svg";
import AdTwo from "../../assets/Xcover.svg";
import SideTextIcon from "../SideTextIcon";
import AdCard from "../AdCard";
import PriceDetails from "../PriceDetails";

const BookingSummary = () => {
	return (
		<>
			{/* <div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary">
				<Typography className="text-black mb-7" tag="title01bold">
					Booking Summary
				</Typography>
				<Typography className="text-black mb-1 text-center" tag="captions">
					Express
				</Typography>
				<div className="flex justify-center mb-2">
					<Icon imageClass="w-7 h-6" src={Plane} alt="plane-icon" />
				</div>
				<div
					className="grid"
					style={{ gridTemplateColumns: "100px 1fr 100px" }}>
					<div className="col-span-1">
						<SideTextIcon
							src={Travel}
							imageClass="w-9 h-6"
							alt="Icon"
							tag="title02semibold"
							text="Delhi,
                        110003 India
                       "
							textClass="text-black capitalize text-center"
							block
						/>
					</div>
					<div className="h-0.5 w-full bg-black mt-2"></div>
					<div>
						<SideTextIcon
							src={Travel}
							imageClass="w-9 h-6"
							alt="Icon"
							tag="title02semibold"
							text="Shanghai
                        200080, China
                        "
							textClass="text-black capitalize text-center"
							block
						/>
					</div>
				</div>
			</div>
			<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary ">
				<Typography
					color="#5C5C5C"
					className="text-black text-center mb-2"
					tag="title02semibold">
					Total Weight/Volume
				</Typography>
				<SideTextIcon
					src={Weight}
					imageClass="w-16 h-16"
					alt="Icon"
					tag="title02semibold"
					text="114.21KG
                        "
					textClass="text-black capitalize text-center"
					block
				/>
			</div>
			<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary ">
				<Typography
					color="#5C5C5C"
					className="text-black mb-2"
					tag="title02semibold">
					Load
				</Typography>
				<div
					className="grid place-items-center grid-cols-2"
					style={{ gridTemplateColumns: "1fr 1fr" }}>
					<div className="ml-auto">
						<Typography
							color="#5C5C5C"
							className="text-black mb-2"
							tag="title02semibold">
							1X
						</Typography>
					</div>
					<div className="mr-auto">
						<SideTextIcon
							src={Load}
							imageClass="w-11 h-11"
							alt="Icon"
							tag="title02semibold"
							text="Pallets
                        "
							textClass="text-black capitalize text-center"
							block
						/>
						<Typography
							color="#5C5C5C"
							className="text-black mb-2 mt-2"
							tag="title02semibold">
							230 X 140 X 120 CM
						</Typography>
					</div>
				</div>
			</div>
			<AdCard
				adSrc={AdOne}
				adTitle="Seller: Primetime Worldwide"
				imageClass="w-36 h-16"
			/>
			<AdCard
				adSrc={AdTwo}
				adTitle="Insurance:Xcover.com"
				imageClass="w-64 h-16"
			/> */}
			<PriceDetails
				sellerPrice="400"
				insurancePrice="200"
				platformFee="40"
				totalPrice="640"
				title="Price Details"
			/>
		</>
	);
};

export default BookingSummary;
