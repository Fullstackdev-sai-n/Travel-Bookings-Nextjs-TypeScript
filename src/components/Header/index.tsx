import Icon from "@/elements/Icon";
import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import DollarSquare from "../../assets/dollarsquare.svg";
import Button from "@/elements/Button";
import Link from "next/link";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isBooking, setIsBooking] = useState(false);
	return (
		<header>
			<nav className="sm:flex justify-between">
				<Link href="/">
					<Icon src={Logo} alt="logo" imageClass="" />
				</Link>
				<div className="grid mt-4 sm:mt-0 sm:flex gap-4">
					{!isLoggedIn && !isBooking && (
						<>
							<Button variant="primary" className="w-36">
								Login
							</Button>
							<Button variant="outlined" className="w-36">
								Learn More
							</Button>
						</>
					)}
					{isLoggedIn && !isBooking && (
						<>
							<Icon src={DollarSquare} alt="dollar-square" />
							<Button variant="primary">Track Shipment</Button>
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
