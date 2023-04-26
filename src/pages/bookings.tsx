import BookingSummary from "@/components/BookingSummary";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import React, { Fragment } from "react";
import PriceDetails from "@/components/PriceDetails";
import Icon from "@/elements/Icon";
import ChatIcon from "../assets/Chat button.svg";
import {
	BookingSummaryProps,
	priceDetailsProps,
	seoBookingsProps,
} from "@/utils/pageProps";
import Seo from "@/components/Seo";

const Bookings = () => {
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
