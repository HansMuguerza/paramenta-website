import styled from "styled-components";
import { colors } from "../../../../theme";

const color = {
	containerBg: colors.primary800,

	titleColor: colors.secondary50,
	titleUnderlineColor: colors.secondary300,

	bodyColor: colors.primary200,
	linkSocialHoverColor: colors.secondary500,
	linkSocialSvgFill: colors.primary200,
	linkSocialHoverSvgFill: colors.secondary500,
};

export const FooterContainer = styled.div`
	background: ${color.containerBg};
	display: flex;
	justify-content: center;
	position: relative;
`;

export const FooterContent = styled.div`
	width: 100%;
	padding: 3rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-areas: "col1 col2 col3 col4";
	gap: 2rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			"col1 col2 col3"
			"col4 col4 col4";
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"col1 col2"
			"col3 col3"
			"col4 col4";
	}
`;

export const TitleColumn = styled.div`
	color: ${color.titleColor};
	font-size: 16px;
	font-weight: 500;
`;

export const BodyColumn = styled.div`
	color: ${color.bodyColor};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-weight: 300;

	> a {
		color: ${color.bodyColor};
	}
`;

export const Column1 = styled.div`
	grid-area: col1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Column2 = styled.div`
	grid-area: col2;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Column3 = styled.div`
	grid-area: col3;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Column4 = styled.div`
	grid-area: col4;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const LinkSocial = styled.a`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	> svg {
		fill: ${color.linkSocialSvgFill};
	}

	&:hover {
		color: ${color.linkSocialHoverColor};

		> svg {
			fill: ${color.linkSocialHoverSvgFill};
		}
	}
`;
