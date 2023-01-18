import { LogoContainer, LogoMain, NameLogo } from "./LogoElements";
import LogoPri from "../../assets/logo.svg"
import LogoAlt from "../../assets/logo-alt.svg"

const Logo = ({ alt, name = true }) => {
    return (
        <LogoContainer>
            <LogoMain
            src={alt ? LogoAlt : LogoPri }
            alt="Logo Principal"
            />
            {
                name && name ?
                <NameLogo>Paramenta</NameLogo>
                :
                null
            }
        </LogoContainer>
    );
};

export default Logo;