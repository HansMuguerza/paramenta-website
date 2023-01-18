import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, shadows } from "../../../theme";

const color = {
    navBg: colors.primary600,

    navLinksColor: colors.neutral200,
    NavLinksHoverColor: colors.white,
    navLinksActiveBorderBottom: colors.primary,
    iconBars: colors.white,

    mobileIconColor: colors.white,

    navBtnLinkBg: colors.primary500,
    navBtnLinkColor: colors.white,
    navBtnLinkHoverBg: colors.secondary600,
    navBtnLinkHoverColor: colors.secondary50,
    navBtnLinkHoverBorder: colors.primary500,
}

export const Nav = styled.nav`
    background: ${color.navBg};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    box-shadow: ${shadows.primary};
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

export const LogoImg = styled(motion.img)`
    width: 32px;
`;

export const MobileIcon = styled.div`
    display: none;
    color: ${color.mobileIconColor};
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const IconBars = styled(FontAwesomeIcon)`
    font-size: 1.6rem;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: ${color.navLinksColor};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 100%;
    padding: 0 30px;
    cursor: pointer;
    transition: .15s ease-in-out;

    &:hover {
        color: ${color.NavLinksHoverColor};
    }

    &.active {
        border-bottom: 2px solid ${color.navLinksActiveBorderBottom};
    }
`



export const NavBtn = styled.nav`
    display: flex;
    align-items:center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
`

