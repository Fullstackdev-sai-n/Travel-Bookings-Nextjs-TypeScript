import { data, seo } from "./data";

const {
	startFrom,
	destination,
	weight,
	loadDimesions,
	adOneSrc,
	adOneTitle,
	adTwoSrc,
	adTwoTitle,
	sellerPrice,
	insurancePrice,
	platformFee,
	totalPrice,
	title,
} = data.bookings;

const { home, bookings, shipping } = seo;

export const BookingSummaryProps = {
	startFrom,
	destination,
	weight,
	loadDimesions,
	adOneSrc,
	adOneTitle,
	adTwoSrc,
	adTwoTitle,
};

export const priceDetailsProps = {
	sellerPrice,
	insurancePrice,
	platformFee,
	totalPrice,
	title,
};
export const seoBookingsProps = {
	title: bookings.title,
	description: bookings.description,
	keywords: bookings.keywords,
};
export const seoHomeProps = {
	title: home.title,
	description: home.description,
	keywords: home.keywords,
};
export const seoShippingProps = {
	title: shipping.title,
	description: shipping.description,
	keywords: shipping.keywords,
};
