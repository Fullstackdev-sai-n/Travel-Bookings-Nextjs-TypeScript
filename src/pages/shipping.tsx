import Header from "@/components/Header";
import Progress from "@/components/Progress";
import SideTextIcon from "@/components/SideTextIcon";
import React, { Fragment, useEffect, useState } from "react";
import Ship from "../assets/ship.svg";
import SearchBar from "@/components/SearchBar";
import SideFilters from "@/components/SideFilters";
import TabIndex from "@/components/TabButtons";
import ShippingCard from "@/components/ShippingCard";
import { data } from "../utils/data";
import Icon from "@/elements/Icon";
import ChatIcon from "../assets/Chat button.svg";
import { seoShippingProps } from "@/utils/pageProps";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

const Shipping = () => {
	const { shipping, tabData, filtersData } = data;
	const [formData, setFormData] = useState({});
	const [search, setSearch] = useState([]);
	const [isEdit, setIsEdit] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setFormData(JSON.parse(localStorage?.getItem("formData")));
	}, []);

	const filteredData = shipping.filter((item) =>
		item?.startText?.toLowerCase().includes(formData?.origin?.toLowerCase())
	);

	const filters = (listsData: string, target: string) => {
		const filterData = listsData.filter((item: string | any) =>
			item?.startText?.toLowerCase().includes(target.toLowerCase())
		);
		return setSearch(filterData);
	};
	const editing = () => {
		return setIsEdit(true);
	};

	const handleSelect = (index: string | number | any) => {
		const dataClick = isEdit ? search[index] : filteredData[index];
		router.push("/bookings");
		localStorage.setItem("selected-list-item", JSON.stringify(dataClick));
		return dataClick;
	};

	return (
		<Fragment>
			<Seo {...seoShippingProps} />
			<div className="bg-main px-9 py-8 relative">
				<div className="absolute bottom-24 right-0">
					<Icon src={ChatIcon} imageClass="w-32 h-32" alt="Chat-Icon" />
				</div>
				<Header />
				<main className="mt-16 mb-12">
					<section className="grid place-items-center gap-4 md:gap-0 grid-cols-shippingTopSm md:grid-cols-shippingTop">
						<div className="bg-white py-3 rounded-xl px-4 w-44 md:ml-auto">
							<SideTextIcon
								src={Ship}
								imageClass="w-6 h-6"
								alt="Icon"
								tag="captions"
								text="Load"
								textClass="text-graySecondary ml-4 mt-2"
							/>
						</div>
						<Progress currentStep={3} totalSteps={5} />
					</section>
					<section className="mt-14">
						<SearchBar
							filters={(target) => filters(shipping, target)}
							initialValues={formData}
							edit={true}
							editing={editing}
						/>
					</section>
					<div className="w-full h-prime my-5 bg-prime"></div>
					<section className="grid md:grid-cols-sCSectionMd lg:grid-cols-sCSection gap-0 md:gap-12">
						<SideFilters
							heading="3 Top Quote (6 in Total)"
							filtersData={filtersData}
						/>
						<div>
							<TabIndex tabData={tabData} />
							<div className="mt-10">
								{!isEdit
									? filteredData?.map((ship, i) => {
											return (
												<ShippingCard
													isVariant={ship.isVariant}
													key={i}
													indicatorText={ship.indicatorText}
													estDays={ship.estDays}
													totalPrice={ship.totalPrice}
													startText={ship.startText}
													destinationText={ship.destinationText}
													providerName={ship.providerName}
													onClick={() => handleSelect(i)}
												/>
											);
									  })
									: search?.map((ship: any, index) => {
											return (
												<ShippingCard
													isVariant={ship.isVariant}
													key={index}
													indicatorText={ship.indicatorText}
													estDays={ship.estDays}
													totalPrice={ship.totalPrice}
													startText={ship.startText}
													destinationText={ship.destinationText}
													providerName={ship.providerName}
													onClick={() => handleSelect(index)}
												/>
											);
									  })}
							</div>
						</div>
					</section>
				</main>
			</div>
		</Fragment>
	);
};

export default Shipping;
