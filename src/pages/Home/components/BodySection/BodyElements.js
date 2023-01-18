import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../../theme";

const color = {
	bodyContainerBg: colors.primary600,
	bodyContainerBgAlt: colors.primary50,

	headingColor: colors.primary50,
	headingColorAlt: colors.primary600,

	subtitleColor: colors.primary100,
	subtitleColorAlt: colors.primary500,

	titleColor: colors.white,

	//plans styles
	plansContainerBg: colors.primary50,
	plansContentBg: colors.primary600,

	plansTitleColor: colors.white,
	plansSubtitleColor: colors.primary100,

	plansTitleSpanColor: colors.secondary50,
	plansTitleSpanBg: colors.secondary500,
};

export const BodyContainer = styled.div`
	background: ${({ dark }) =>
		dark ? color.bodyContainerBg : color.bodyContainerBgAlt};
`;

export const BodyContent = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	gap: 2.5rem;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: ${({ reverse }) =>
		reverse ? `"col2 col1"` : `"col1 col2"`};
	padding: 3rem 0;

	@media screen and (max-width: 768px) {
		text-align: ${({ reverse }) => (reverse ? "" : "right")};
		grid-template-columns: 1fr;
		grid-template-areas: "col2";
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		grid-template-areas: "col2";
	}
`;

export const ContentFirst = styled(motion.div)`
	grid-area: col1;
	display: flex;

	@media screen and (max-width: 768px) {
		display: none;
	}

	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export const ContentSecond = styled(motion.div)`
	grid-area: col2;
	display: flex;
`;

export const BodyImage = styled.img`
	width: 100%;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (max-width: 768px) {
		align-items: ${({ reverse }) => (reverse ? "" : "flex-end")};
	}
`;

export const Heading = styled.h3`
	color: ${({ dark }) => (dark ? color.headingColor : color.headingColorAlt)};
	font-size: 2.2rem;
	font-weight: 600;
`;

export const Subtitle = styled.p`
	color: ${({ dark }) => (dark ? color.subtitleColor : color.subtitleColorAlt)};
	font-size: 1rem;
`;

export const PlansContainer = styled.div`
	background: ${color.plansContainerBg};
	padding: 3rem 0;
`;

export const PlansContent = styled.div`
	position: relative;
	overflow: hidden;
	background: ${color.plansContentBg};
	border-radius: 1.2rem;
	padding: 3em 5em;
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 0.6rem;

	> div > h2 {
		color: ${color.plansTitleColor};
		max-width: 500px;
		font-size: 2rem;
		font-weight: 600;
		line-height: 1.3;
		margin-bottom: 0.4em;
		/* text-decoration: underline ${color.plansTitleSpanBg}; */
	}

	> div > p {
		color: ${color.plansSubtitleColor};
		max-width: 400px;
		font-size: 1rem;
	}

	@media screen and (max-width: 768px) {
		padding: 3em 2em;
		grid-template-columns: 1fr;
	}
`;

export const PlansButtonContent = styled.div`
	display: flex;
	justify-content: end;
	align-items: flex-end;
`;

export const CirclePlans = styled.div`
	position: absolute;
	padding: 4em;
	border-radius: 9999px;
	background-color: #ff5858;
	right: -25px;
	top: -25px;

	@media screen and (max-width: 768px) {
		right: -54px;
		top: -54px;
	}
`;

export const CirclePlans2 = styled.div`
	position: absolute;
	padding: 2.5em;
	border-radius: 9999px;
	background-color: #ffc960;
	right: 300px;
	bottom: -30px;

	@media screen and (max-width: 768px) {
		left: 20px;
		bottom: -40px;
	}
`;
