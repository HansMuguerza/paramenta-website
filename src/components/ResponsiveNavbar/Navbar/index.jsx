import { faBars } from "@fortawesome/free-solid-svg-icons";
import { dataNavbar, primaryBtnNavbar } from "../dataNavbar";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	IconBars,
	LogoImg,
	NavBtnLink,
} from "./NavbarElements";
import { ContentMain } from "../../../styles";
import Button from "../../Button";
import Logo from "../../Logo";

const Navbar = ({ toggle }) => {
	return (
		<Nav>
			<ContentMain>
				<NavbarContainer
					id="header"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						stiffness: 145,
						damping: 15,
					}}>
					<NavLogo to="/">
						<Logo />
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<IconBars icon={faBars} />
					</MobileIcon>
					<NavMenu>
						{/* //link change to "/" before "/plantillas" */}
						{dataNavbar &&
							dataNavbar.map((i) => (
								<NavItem key={i.id}>
									<NavLinks to={"/"}>{i.name}</NavLinks>
								</NavItem>
							))}
						{primaryBtnNavbar &&
							primaryBtnNavbar.map((i) => (
								<NavBtnLink key={i.id} to={"/"}>
									<Button>{i.name}</Button>
								</NavBtnLink>
							))}
					</NavMenu>
				</NavbarContainer>
			</ContentMain>
		</Nav>
	);
};

export default Navbar;
