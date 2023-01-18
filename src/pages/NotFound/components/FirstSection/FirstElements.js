import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../theme";

const color = {
    containerBg: colors.primary50,

    error404Color: colors.primary600,
    errorTextColor: colors.primary500,
}

export const FirstContainer = styled.div`
    background: ${color.containerBg};
`;

export const FirstContent = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Error404 = styled.span`
    color: ${color.error404Color};
    font-size: 5rem;
    font-weight: 800;
    -webkit-text-stroke: 0 ${color.error404Color};
    text-decoration: underline ${color.error404Color};
`;

export const ErrorText = styled.p`
    color: ${color.errorTextColor};
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    line-height: 3rem;
`;