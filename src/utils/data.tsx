import Ship from "../assets/ship-blue.svg";
import BussinessIcon from "../assets/briefcase.svg";
import GlobalSearch from "../assets/globalsearch.svg";
import Twenty4by7 from "../assets/i24support.svg";
import AdOne from "../assets/Frame 64.svg";
import AdTwo from "../assets/Xcover.svg";

export const data = {
	services: [
		{
			title: "Freight Services",
			icon: Ship,
			description:
				"Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.",
		},
		{
			title: "Business Services",
			icon: BussinessIcon,
			description:
				"We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.",
		},
		{
			title: "Shipping & Logistics",
			icon: GlobalSearch,
			description:
				"Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.",
		},
		{
			title: "24/7 Support",
			icon: Twenty4by7,
			description:
				"Receive support from our experts all over the world at every stage of the process, 24/7.",
		},
	],
	bookings: {
		startFrom: "Delhi,110003 India",
		destination: "Shanghai 200080, China",
		weight: 114,
		loadDimesions: "230 X 140 X  120 CM",
		adOneSrc: AdOne,
		adOneTitle: "Seller: Primetime Worldwide",
		adTwoSrc: AdTwo,
		adTwoTitle: "Insurance:Xcover.com",
		sellerPrice: "400",
		insurancePrice: "200",
		platformFee: "40",
		totalPrice: "640",
		title: "Price Details",
	},
	shipping: [
		{
			isVariant: true,
			indicatorText: "Best Values",
			estDays: 4,
			totalPrice: 400,
			startText: "cdhhdgvgdc",
			destinationText: "cdhhdgvgdc",
		},
		{
			isVariant: false,
			indicatorText: "Echo",
			estDays: 4,
			totalPrice: 400,
			startText: "cdhhdgvgdc",
			destinationText: "cdhhdgvgdc",
		},
		{
			isVariant: false,
			indicatorText: "Echo",
			estDays: 4,
			totalPrice: 400,
			startText: "cdhhdgvgdc",
			destinationText: "cdhhdgvgdc",
		},
		{
			isVariant: true,
			indicatorText: "Best Values",
			estDays: 4,
			totalPrice: 400,
			startText: "cdhhdgvgdc",
			destinationText: "cdhhdgvgdc",
		},
	],
	tabData: [
		{
			value: "Best Value 5-5 days. $3,121",
		},
		{
			value: "Best Value 5-5 days. $3,121",
		},
		{
			value: "Best Value 5-5 days. $3,121",
		},
	],
	filtersData: [
		{
			name: "Filters",
		},
		{
			name: "Price",
		},
		{
			name: "Modes",
		},
		{
			name: "Seller",
		},
	],
};

export const seo = {
	home: {
		title:
			"Book Your Next Adventure with Shipmate - Your Ultimate Travel Guide.",
		description:
			"Discover amazing travel deals and book your dream vacation with Shipmate. Browse our wide range of destinations, accommodations, and activities. Start planning your next adventure now!.",
		keywords:
			"travel deals, vacation, travel guide, destinations, accommodations, activities, adventure, Shipmate",
	},
	bookings: {
		title:
			"Book Flights, Hotels, and Vacation Packages - Your Travel Booking Website",
		description:
			"Find the best deals on flights, hotels, and vacation packages for your next trip. Book with confidence on Your Travel Booking Website and save on your travel expenses.",
		keywords:
			"flights, hotels, vacation packages, tours, car rentals, cruise bookings, travel reservations, online bookings, discounted rates, best deals",
	},
	shipping: {
		title: "Shipping Information | Shipmate",
		description:
			" Get information on shipping options for your purchases from Shipmate. Read about our shipping policies and delivery times here.",
		keywords:
			" shipping, shipping information, delivery times, travel products, purchases, shipmate",
	},
};
