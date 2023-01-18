import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ContentMain } from "../../../styles";
import ButtonElement from "../../Button";
import Logo from "../../Logo";
import { dataNavbar, primaryBtnNavbar } from "../dataNavbar";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	CloseIconHeader,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	NavLogo,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<ContentMain>
				<CloseIconHeader>
					<NavLogo to="/">
						<Logo />
					</NavLogo>
					<Icon onClick={toggle}>
						<CloseIcon icon={faTimes} />
					</Icon>
				</CloseIconHeader>
				<SidebarWrapper>
					<SidebarMenu>
						{/* //link change to "/" before "/plantillas" */}
						{dataNavbar &&
							dataNavbar.map((i) => (
								<SidebarLink key={i.id} to={"/"} onClick={toggle}>
									{i.name}
								</SidebarLink>
							))}
						{primaryBtnNavbar &&
							primaryBtnNavbar.map((i) => (
								<SidebarRoute key={i.id} to={"/"} onClick={toggle}>
									<ButtonElement width="100%" height="100%" fontSize="1.2rem">
										{i.name}
									</ButtonElement>
								</SidebarRoute>
							))}
					</SidebarMenu>
				</SidebarWrapper>
			</ContentMain>
		</SidebarContainer>
	);
};

export default Sidebar;
