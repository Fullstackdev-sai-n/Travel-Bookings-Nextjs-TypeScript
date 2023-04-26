import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ServicesCard from "@/components/ServicesCard";
import Icon from "@/elements/Icon";
import Typography from "@/elements/Typography";
import { data } from "@/utils/data";
import WaterWave from "../assets/waves.png";
import ChatIcon from "../assets/Chat button.svg";
import { Fragment } from "react";
import Seo from "@/components/Seo";
import { seoHomeProps } from "@/utils/pageProps";

export default function Home() {
	const serviceCards = data.services.map((list, index) => {
		return (
			<ServicesCard
				key={index}
				description={list.description}
				icon={list.icon}
				textheading={list?.title}
				headingClass="text-black ml-7 mt-2"
				tag="title02"
			/>
		);
	});

	return (
		<Fragment>
			<Seo {...seoHomeProps} />
			<div className="bg-main px-9 py-8 relative pb-44">
				<div className="absolute bottom-24 right-0">
					<Icon src={ChatIcon} imageClass="w-32 h-32" alt="Chat-Icon" />
				</div>
				<Header />

				<main>
					<section className="text-center py-28">
						<Typography tag="h1semibold" className="text-black">
							Hassle-Free Shipping Solutions
						</Typography>
						<Typography tag="title01" className="text-black">
							Compare, book, and manage your freight across the world’s top
							logistics providers, all on one platform.
						</Typography>
					</section>
					<section className="pb-12 sm:pb-24 sm:px-9 z-10">
						<SearchBar />
					</section>
					<section className="sm:pb-6">
						<Typography className="mb-10 text-black text-center" tag="h3">
							Services
						</Typography>
						<div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
							{serviceCards}
						</div>
					</section>
					<section className="absolute bottom-0 left-0">
						<Icon src={WaterWave} alt="water-Effect" />
					</section>
				</main>
			</div>
		</Fragment>
	);
}
