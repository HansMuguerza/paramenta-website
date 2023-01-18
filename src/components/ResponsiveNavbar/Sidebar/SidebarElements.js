import styled from "styled-components";
import { Link as LinkS } from "react-scroll"
import { Link, Link as LinkR } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from "../../../theme";

const color = {
    sidebarContainerBg: colors.primary600,

    closeIconColor: colors.white,
    sidebarWrapperColor: colors.white,

    sidebarLinkBg: colors.primary800,
    sidebarLinkBorder: colors.primary700,
    sidebarLinkColor: colors.primary50,
    sidebarLinkHoverColor: colors.primary50,

    sidebarRouteBg: colors.primary600,
    sidebarRouteHoverBg: colors.white,
    sidebarRouteColor: colors.primary50,
    sidebarRouteHoverColor: colors.black,
}

export const SidebarContainer = styled.aside`
    background: ${color.sidebarContainerBg};
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const SidebarMenu = styled.ul`
    font-size: 1.2rem;
    margin-top: 1rem;
    display: grid;
    grid-template-rows: repeat(5, 80px);
    gap: 1rem;
`

export const CloseIconHeader = styled.div`
    z-index: 1;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CloseIcon = styled(FontAwesomeIcon)`
    color: ${color.closeIconColor};
    font-size: 1.8rem;
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${color.sidebarWrapperColor};
`

export const SidebarLink = styled(LinkS)`
    color: ${color.sidebarLinkColor};
    background: ${color.sidebarLinkBg};
    border: 1px solid ${color.sidebarLinkBorder};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${color.sidebarLinkHoverColor};
        transition: 0.2s ease-in-out;
    }

    &:active {
        color: ${color.sidebarLinkHoverColor};
        transition: 0.2s ease-in-out;
    }
`

export const SidebarRoute = styled(LinkR)`
    /* border-radius: 50px;
    background: ${color.sidebarRouteBg};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${color.sidebarRouteColor};
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${color.sidebarRouteHoverBg};
    } */
`