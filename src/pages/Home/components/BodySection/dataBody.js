import { v4 } from "uuid";
import bodyImg1 from "../../../../assets/svg/body-image_1.svg";
import bodyImg2 from "../../../../assets/svg/body-image_2.svg";
import bodyImg3 from "../../../../assets/svg/body-image_3.svg";

export const dataBody = [
	// {
	// 	id: v4(),
	// 	title: "Diseños atractivos y modernos",
	// 	subtitle:
	// 		"Tendrás a tu elección una variedad de plantillas para que busques la que más se adapte a tu negocio.",
	// 	img: bodyImg1,
	// 	alt: "Plantillas Web",
	// 	reverse: false,
	// 	dark: true,
	// },
	{
		id: v4(),
		title: "Adaptable a cualquier dispositivo",
		subtitle:
			"Optimizado para visualizarse en todo tipo de pantallas y equipos como PCs, laptops, smartphones y tablets.",
		img: bodyImg2,
		alt: "Plantillas Web",
		reverse: true,
		dark: false,
	},
	{
		id: v4(),
		title: "Con un dominio personalizado",
		subtitle:
			"Te daremos la opción de adquirir un dominio personalizado, será el nombre exclusivo que se le dará a tu sitio web.",
		img: bodyImg1,
		alt: "Plantillas Web",
		reverse: false,
		dark: true,
	},

	{
		id: v4(),
		title: "Un equipo profesional dispuesto a ayudarte",
		subtitle:
			"Nuestro equipo capacitado siempre estará dispuesto a ayudarte, te daremos varias opciones para comunicarte con nosotros.",
		img: bodyImg3,
		alt: "Plantillas Web",
		reverse: true,
		dark: false,
	},
];
