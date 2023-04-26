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
	children: String | any;
	color?: String;
	className?: String;
	containerClass?: String | any;
}

const Typography: React.FC<TypographyProps> = ({
	tag,
	color,
	children,
	className,
	containerClass,
}) => {
	const typographyData: TypographyData | any = StylesJson.font;
	const headingStyleData: any = typographyData[tag];

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

	const HeadingTag = tag.match("title")
		? "div"
		: tag.includes("captions")
		? "div"
		: tag.match("body")
		? "div"
		: tag.match("h1")
		? "h1"
		: tag.match("h2")
		? "h2"
		: tag.match("h3")
		? "h3"
		: tag.match("h4")
		? "h4"
		: tag;

	return (
		<div className={containerClass}>
			<HeadingTag className={className} style={headingStyleProps}>
				{children}
			</HeadingTag>
		</div>
	);
};

export default Typography;
