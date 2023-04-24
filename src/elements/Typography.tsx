import React from "react";
import StylesJson from "../styles/styles.json";

interface FontStyles {
	type: string;
	value: {
		fontSize: number;
		textDecoration: string;
		fontFamily: string;
		fontWeight: number;
		fontStyle: string;
		fontStretch: string;
		letterSpacing: number;
		lineHeight: number;
		paragraphIndent: number;
		paragraphSpacing: number;
		textCase: string;
	};
}

interface TypographyData {
	font: {
		[key: string]: FontStyles;
	};
}

interface TypographyProps {
	tag: String | any;
	children: String;
	color?: String;
	className?: String;
}

const Typography: React.FC<TypographyProps> = ({
	tag,
	color,
	children,
	className,
}) => {
	const typographyData: TypographyData | any = StylesJson.font;
	const headingStyleData: any = typographyData[tag];
	console.log(headingStyleData);
	console.log("headingStyleData", headingStyleData);

	if (!headingStyleData) {
		return null;
	}

	const headingStyleProps: React.CSSProperties | any = {
		fontSize: headingStyleData.value.fontSize,
		textDecoration: headingStyleData.value.textDecoration,
		fontFamily: headingStyleData.value.fontFamily,
		fontWeight: headingStyleData.value.fontWeight,
		fontStyle: headingStyleData.value.fontStyle,
		fontStretch: headingStyleData.value.fontStretch,
		letterSpacing: headingStyleData.value.letterSpacing,
		lineHeight: headingStyleData.value.lineHeight + "px",
		paragraphIndent: headingStyleData.value.paragraphIndent,
		paragraphSpacing: headingStyleData.value.paragraphSpacing,
		textCase: headingStyleData.value.textCase,
		color: color,
	};

	const HeadingTag = tag;

	return (
		<div>
			<HeadingTag className={className} style={headingStyleProps}>
				{children}
			</HeadingTag>
		</div>
	);
};

export default Typography;
