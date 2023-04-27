import BookingSummary from "@/components/BookingSummary";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import React, { Fragment, useEffect, useState } from "react";
import PriceDetails from "@/components/PriceDetails";
import Icon from "@/elements/Icon";
import ChatIcon from "../assets/Chat button.svg";
import AdOne from "../assets/Frame 64.svg";
import AdTwo from "../assets/Xcover.svg";
import { seoBookingsProps } from "@/utils/pageProps";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

const Bookings = () => {
	const [listData, setListData] = useState("");
	const router = useRouter();

	useEffect(() => {
		setListData(JSON.parse(localStorage.getItem("selected-list-item")));
	}, []);

	const {
		startText,
		destinationText,
		weight,
		providerName,
		isVariant,
		estDays,
		totalPrice,
	} = listData;

	const BookingSummaryProps = {
		startFrom: startText,
		destination: destinationText,
		weight,
		loadDimesions: "230 X 140 X  120 CM",
		adOneSrc: AdOne,
		adOneTitle: providerName,
		adTwoSrc: AdTwo,
		adTwoTitle: providerName,
	};

	const priceDetailsProps = {
		sellerPrice: 230,
		insurancePrice: 200,
		platformFee: 100,
		totalPrice,
		title: "Price Details",
		onClick: () => {
			router.push("/");
		},
	};

	return (
		<Fragment>
			<Seo {...seoBookingsProps} />
			<div className="bg-main px-9 py-8 relative">
				<div className="absolute bottom-4 right-0">
					<Icon src={ChatIcon} imageClass="w-32 h-32" alt="Chat-Icon" />
				</div>
				<Header />
				<main className="mt-16 mb-12">
					<section className="grid place-items-center">
						<Progress currentStep={3} totalSteps={5} />
					</section>
					<section className="grid gap-10 mt-20 grid-cols-bookingSm lg:grid-cols-booking">
						<BookingSummary {...BookingSummaryProps} />
						<PriceDetails {...priceDetailsProps} />
					</section>
				</main>
			</div>
		</Fragment>
	);
};

export default Bookings;
