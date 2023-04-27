import { seo } from "./data";

const { home, bookings, shipping } = seo;

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
