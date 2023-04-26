import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import React from "react";
import Plane from "../../assets/Plane icon.svg";
import Travel from "../../assets/icon-1.svg";
import Weight from "../../assets/weightmeter.svg";
import Load from "../../assets/Vector 3.svg";
import SideTextIcon from "../SideTextIcon";
import AdCard from "../AdCard";

interface BookingSummaryProps {
	startFrom: string;
	destination: string;
	weight: Number;
	loadDimesions: string;
	adOneSrc: string;
	adOneTitle: string;
	adTwoSrc: string;
	adTwoTitle: string;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
	startFrom,
	destination,
	weight,
	loadDimesions,
	adOneSrc,
	adOneTitle,
	adTwoSrc,
	adTwoTitle,
}) => {
	return (
		<div className="grid gap-4">
			<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary col-span-12">
				<Typography className="text-black mb-7" tag="title01bold">
					Booking Summary
				</Typography>
				<Typography className="text-black mb-1 text-center" tag="captions">
					Express
				</Typography>
				<div className="flex justify-center mb-2">
					<Icon imageClass="w-7 h-6" src={Plane} alt="plane-icon" />
				</div>
				<div className="grid grid-cols-bstravel">
					<div className="col-span-1">
						<SideTextIcon
							src={Travel}
							imageClass="w-9 h-6"
							alt="Icon"
							tag="title02semibold"
							text={startFrom}
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
							text={destination}
							textClass="text-black capitalize text-center"
							block
						/>
					</div>
				</div>
			</div>
			<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary col-span-12 sm:col-span-2">
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
					text={`${weight}KG
					`}
					textClass="text-black capitalize text-center"
					block
				/>
			</div>
			<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary col-span-12 sm:col-span-10">
				<Typography
					color="#5C5C5C"
					className="text-black mb-2"
					tag="title02semibold">
					Load
				</Typography>
				<div className="grid place-items-center grid-cols-12 sm:grid-cols-2 grid-cols-bsLoad">
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
							{loadDimesions} CM
						</Typography>
					</div>
				</div>
			</div>
			<div className="col-span-12 sm:col-span-6">
				<AdCard adSrc={adOneSrc} adTitle={adOneTitle} imageClass="w-36 h-16" />
			</div>
			<div className="col-span-12 sm:col-span-6">
				<AdCard adSrc={adTwoSrc} adTitle={adTwoTitle} imageClass="w-64 h-16" />
			</div>
		</div>
	);
};

export default BookingSummary;
