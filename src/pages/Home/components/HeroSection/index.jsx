import {
	faArrowRight,
	faChevronDown,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImg from "../../../../assets/svg/hero-image.svg";
import Button from "../../../../components/Button";
import {
	HeroContainer,
	ArrowRight,
	ArrowForward,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	HeroSub,
	FirstColumn,
	SecondColumn,
	HeroImage,
	HeroEmoji,
	MoreInfoContent,
	MoreInfoTitle,
	MoreInfoBody,
} from "./HeroElements";
import { ContentMain } from "../../../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image1 from "../../../../assets/img/image_1.png";
import image2 from "../../../../assets/img/image_2.png";
import image3 from "../../../../assets/img/image_3.png";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	// Animation Items

	const container = {
		hidden: {
			opacity: 1,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: {
			y: 20,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<HeroContainer id="home">
			<ContentMain>
				<HeroContent>
					<FirstColumn variants={container} initial="hidden" animate="visible">
						<motion.li variants={item}>
							<HeroH1>
								Obtén tu
								<br /> <span>página web</span> profesional
							</HeroH1>
						</motion.li>
						<motion.li variants={item}>
							<HeroSub>
								<HeroP>
									Tu página web en poco tiempo, con un diseño agradable para tus
									clientes.
								</HeroP>
							</HeroSub>
						</motion.li>
						<motion.li variants={item}>
							<HeroBtnWrapper>
								{/* //link change to "/" before "/plantillas" */}
								<LinkR to="/">
									<Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true">
										Plantillas
										{hover ? (
											<ArrowRight icon={faArrowRight} />
										) : (
											<ArrowForward icon={faChevronRight} />
										)}
									</Button>
								</LinkR>
							</HeroBtnWrapper>
						</motion.li>
					</FirstColumn>
					<SecondColumn
						initial={{ opacity: 0, rotateY: -40 }}
						animate={{ opacity: 1, rotateY: 0 }}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 15,
							delay: 0.25,
						}}>
						<HeroImage src={HeroImg} alt="Img Main" />
					</SecondColumn>
				</HeroContent>
				<HeroEmoji>
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							repeat: "Infinity",
							stiffness: 150,
							damping: 50,
							delay: 1,
						}}>
						<FontAwesomeIcon icon={faChevronDown} />
					</motion.div>
				</HeroEmoji>
				<MoreInfoContent>
					<MoreInfoTitle>Diseños atractivos y modernos</MoreInfoTitle>
					<p>
						Tendrás a tu elección una variedad de plantillas para que busques la que
						más se adapte a tu negocio.
					</p>
					<MoreInfoBody>
						<img src={image1} />
						<img src={image3} />
						<img src={image2} />
					</MoreInfoBody>
				</MoreInfoContent>
			</ContentMain>
		</HeroContainer>
	);
};

export default HeroSection;
