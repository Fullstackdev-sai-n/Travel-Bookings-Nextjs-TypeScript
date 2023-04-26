import Header from "@/components/Header";
import Progress from "@/components/Progress";
import React from "react";

const Bookings = () => {
	return (
		<div className="bg-main px-9 py-8 relative">
			<Header />
			<main className="mt-16 mb-12">
				<section className="grid place-items-center">
					<Progress currentStep={0} totalSteps={5} />
				</section>
			</main>
		</div>
	);
};

export default Bookings;
