import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../../theme";
import { motion } from "framer-motion";
import { TypingAnimation } from "../../../../styles/animation";

const color = {
	heroContainerBg: colors.primary600,
	videoBg: colors.primary50,

	heroH1Color: colors.primary50,
	heroH1SpanColor: colors.white,
	heroH1SpanBg: colors.secondary500,

	heroH2Color: colors.primary50,
	heroPColor: colors.primary100,

	heroEmojiColor: colors.secondary500,
};

export const HeroContainer = styled.div`
	background: ${color.heroContainerBg};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

export const HeroContent = styled.div`
	margin-top: 2rem;
	z-index: 3;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "col1 col2";

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-areas:
			"col1"
			"col2";
		margin-top: 2.5rem;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

// Backgrounds

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: ${color.videoBg};
`;

export const ImgBg = styled.img`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: ${color.videoBg};
	opacity: 0.075;
`;

export const HeroH1 = styled.h1`
	color: ${color.heroH1Color};
	font-size: 48px;
	font-weight: 800;
	line-height: 1.2;
	margin: 0;

	> span {
		color: ${color.heroH1SpanColor};
		background: ${color.heroH1SpanBg};
	}

	@media screen and (max-width: 768px) {
		font-size: 42px;
	}

	@media screen and (max-width: 480px) {
		font-size: 2.5rem;
	}
`;

export const HeroH2 = styled.h2`
	font-size: 1.2rem;
	color: ${colors.primary};

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}

	@media screen and (max-width: 480px) {
		font-size: 14px;
	}
`;

export const HeroP = styled.p`
	color: ${color.heroPColor};
	font-size: 1rem;
	font-weight: 500;

	@media screen and (max-width: 768px) {
		font-size: 18px;
		line-height: 2rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 16px;
		line-height: 1.5rem;
	}
`;

export const HeroSub = styled.div`
	display: flex;
	width: 350px;

	@media screen and (max-width: 768px) {
		width: 450px;
	}

	@media screen and (max-width: 480px) {
		width: 300px;
	}
`;

export const HeroImage = styled.img`
	width: 100%;

	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

const breatheAnimation = keyframes`
    0% {
        font-size: 3rem;
    }
    100% {
        font-size: 5rem;
    }
`;

export const HeroEmoji = styled.div`
	color: ${color.heroEmojiColor};
	height: 120px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;
	cursor: default;
	transition: 0.5s ease-in-out;

	animation-name: ${breatheAnimation};
	animation: ease;
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
`;

export const HeroBtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ArrowForward = styled(FontAwesomeIcon)`
	margin-left: 8px;
	font-size: 16px;
`;

export const ArrowRight = styled(FontAwesomeIcon)`
	margin-left: 8px;
	font-size: 16px;
`;

export const FirstColumn = styled(motion.ul)`
	grid-area: col1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	@media screen and (max-width: 768px) {
		text-align: center;
		align-items: center;
	}
`;

export const SecondColumn = styled(motion.div)`
	grid-area: col2;
	display: flex;
`;

export const MoreInfoContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	margin-bottom: 2em;

	> p {
		color: ${color.heroH1SpanColor};
		margin: 1em 0;
		max-width: 400px;
		text-align: center;
	}
`;

export const MoreInfoTitle = styled.h2`
	color: ${color.heroH1SpanColor};
	max-width: 10em;
	font-size: 2.5em;
	font-weight: 600;
	text-align: center;
`;

export const MoreInfoBody = styled.div`
	display: flex;
	gap: 0.4em;
	height: 320px;

	> img {
		width: 300px;
		object-fit: scale-down;
		border-radius: 0.4em;
		z-index: 5;

		:first-child {
			position: relative;
			left: 20px;
			width: 220px;
		}

		:last-child {
			position: relative;
			left: -20px;
			width: 220px;
			z-index: 2;
		}
	}
`;
