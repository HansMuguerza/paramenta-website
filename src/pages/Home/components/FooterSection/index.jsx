import { BodyColumn, Column1, Column2, Column3, Column4, FooterContainer, FooterContent, LinkSocial, TitleColumn } from "./FooterElements";
import { Link } from "react-router-dom";
import { ContentMain } from "../../../../styles";
import FacebookIcon from "../../../../components/SocialMedia/FacebookIcon";
import InstagramIcon from "../../../../components/SocialMedia/InstagramIcon";

const FooterSection = () => {

    return (
        <FooterContainer id="contacto">
            <ContentMain>
                <FooterContent>
                    <Column1>
                        <TitleColumn>
                            Productos y Servicios
                        </TitleColumn>
                        <BodyColumn>
                            <Link to="/plantillas">
                                <p>Plantillas</p>
                            </Link>
                            <Link to="/plantillas">
                                <p>Dominio Personalizado</p>
                            </Link>
                        </BodyColumn>
                    </Column1>
                    <Column2>
                        <TitleColumn>
                            Soporte
                        </TitleColumn>
                        <BodyColumn>
                            <p>Ponte en contacto</p>
                            <p>Sección de ayuda</p>
                        </BodyColumn>
                    </Column2>
                    <Column3>
                        <TitleColumn>
                            Síguenos
                        </TitleColumn>
                        <BodyColumn>
                            <LinkSocial target="_blank" href="#">
                                <FacebookIcon/>
                                Facebook
                            </LinkSocial>
                            <LinkSocial target="_blank" href="#">
                                <InstagramIcon/>
                                Instagram
                            </LinkSocial>
                        </BodyColumn>
                    </Column3>
                    <Column4>
                        <TitleColumn>
                            ¿Quiénes Somos?
                        </TitleColumn>
                        <BodyColumn>
                            <p>
                                Paramenta es una plataforma dedicada al diseño y desarrollo web.
                            <br />
                            <br />
                                Buscamos agilizar el proceso de creación de tu sitio web, mediante modernas herramientas.
                            <br />
                            <br />
                                © 2020-2023 Paramenta.
                            </p>
                        </BodyColumn>
                    </Column4>
                </FooterContent>
            </ContentMain>
        </FooterContainer>
    );
};

export default FooterSection;