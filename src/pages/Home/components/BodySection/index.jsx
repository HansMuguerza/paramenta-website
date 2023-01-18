import { Link } from "react-router-dom";
import {
	Header,
	Heading,
	BodyContainer,
	BodyContent,
	Subtitle,
	BodyImage,
	ContentSecond,
	ContentFirst,
	PlansContainer,
	PlansContent,
	PlansButtonContent,
	CirclePlans,
	CirclePlans2,
} from "./BodyElements";
import { ContentMain } from "../../../../styles";
import { dataBody } from "./dataBody";
import ButtonElement from "../../../../components/Button";
import Button from "../../../../components/Button";

const BodySection = () => {
	return (
		<>
			{dataBody &&
				dataBody.map((i) => (
					<BodyContainer id="body" key={i.id} dark={i.dark}>
						<ContentMain>
							<BodyContent reverse={i.reverse}>
								<ContentFirst>
									<BodyImage src={i.img} alt={i.alt} />
								</ContentFirst>
								<ContentSecond>
									<Header reverse={i.reverse}>
										<Heading dark={i.dark}>{i.title}</Heading>
										<Subtitle dark={i.dark}>{i.subtitle}</Subtitle>
										<Link to="/">
											<ButtonElement>Comenzar</ButtonElement>
										</Link>
									</Header>
								</ContentSecond>
							</BodyContent>
						</ContentMain>
					</BodyContainer>
				))}
			<PlansContainer>
				<ContentMain>
					<PlansContent>
						<div>
							<h2>
								Nuestra tarifa es <span>ideal para</span> todo tipo de
								<span> negocios</span>
							</h2>
							<p>
								Página web profesional, moderna y de fácil navegación. Al precio más
								accesible y con valor agregado.
							</p>
						</div>
						<PlansButtonContent>
							<Button>Comenzar</Button>
						</PlansButtonContent>
						<CirclePlans />
						<CirclePlans2 />
					</PlansContent>
				</ContentMain>
			</PlansContainer>
		</>
	);
};

export default BodySection;
