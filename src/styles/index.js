import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../theme";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;

        &::before {
            box-sizing: border-box;
        }

        &::after {
            box-sizing: border-box;
        }
    }

    body {
        font-family: 'Poppins', "Lexend", 'Roboto', sans-serif;
        font-size: 14px;
        color: ${colors.neutral400};
        background: ${colors.indigo50};
        scroll-behavior: smooth;
    }

    p {
        font-size: 14px;
        line-height: 1.4;
    }
`;

//TODO: styles main App.jsx -----------------------------------------------------

export const MainContainer = styled.div``;

export const MainContent = styled.div`
	position: relative;
	top: 80px;
	width: 100%;
`;

export const ContentMain = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 0 2rem;
`;
