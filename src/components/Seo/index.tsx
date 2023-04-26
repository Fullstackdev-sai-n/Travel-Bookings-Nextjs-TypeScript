import React from "react";
import Head from "next/head";

interface SeoProps {
	title: string;
	description: string;
	keywords: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="robots" content="index, follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
	);
};

export default Seo;
