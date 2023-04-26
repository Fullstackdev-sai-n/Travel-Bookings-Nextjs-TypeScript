import Button from "@/elements/Button";
import Typography from "@/elements/Typography";
import React from "react";

interface PriceDetails {
	title: string;
	sellerPrice: string;
	insurancePrice: string;
	platformFee: string;
	totalPrice: string;
}

const PriceDetails: React.FC<PriceDetails> = ({
	title,
	sellerPrice,
	insurancePrice,
	platformFee,
	totalPrice,
}) => {
	return (
		<div className="grid px-8 py-9 bg-white rounded-2xl shadow-primary">
			<div className="flex mb-9">
				<Typography className="text-black m-auto" tag="title01bold">
					{title}
				</Typography>
				<Button className="text-sm font-normal ml-5" variant="starBtn">
					Known shipper
				</Button>
			</div>
			<div className="flex justify-between mb-9 border-b-2 border-primary pb-5">
				<Typography className="text-graySecondary m-auto" tag="title03">
					Seller’s Quote
				</Typography>
				<Typography className="text-graySecondary m-auto" tag="title03">
					${sellerPrice}
				</Typography>
			</div>
			<div className="flex justify-between mb-4">
				<Typography className="text-graySecondary m-auto" tag="title03">
					Duties and taxes
				</Typography>
				<Typography className="text-graySecondary m-auto" tag="title03">
					Not Included
				</Typography>
			</div>
			<div className="flex justify-between mb-1">
				<Typography className="text-graySecondary m-auto" tag="title03">
					Insurance
				</Typography>
				<Typography className="text-graySecondary m-auto" tag="title03">
					${insurancePrice}
				</Typography>
			</div>
			<div className="flex justify-between mb-6 border-b-2 border-primary pb-5">
				<Typography className="text-graySecondary m-auto" tag="title03">
					Based on the items cost
				</Typography>
			</div>
			<div className="flex justify-between mb-4">
				<Typography className="text-graySecondary m-auto" tag="title03">
					Add a promo code
				</Typography>
			</div>
			<div className="flex justify-between mb-9 border-b-2 border-primary pb-5">
				<Typography className="text-graySecondary m-auto" tag="title03">
					Platform fee
				</Typography>
				<Typography className="text-graySecondary m-auto" tag="title03">
					${platformFee}
				</Typography>
			</div>

			<div className="flex justify-between mb-16">
				<Typography className="text-black m-auto" tag="h4bold">
					Total:
				</Typography>
				<Typography className="text-black m-auto" tag="h4bold">
					${totalPrice}
				</Typography>
			</div>
			<Button className="grid place-items-center py-3" variant="secondary">
				<Typography className="text-white m-auto" tag="title01bold">
					Checkout
				</Typography>
			</Button>
		</div>
	);
};

export default PriceDetails;
