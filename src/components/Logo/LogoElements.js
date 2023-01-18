import styled from 'styled-components'
import { colors } from '../../theme';

export const LogoMain = styled.img`
    width: ${({width}) => width ? width : "30px"};
`;

export const NameLogo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.primary50};

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .15s ease-out;

    :hover {
        transform: scale(1.05);
    }

    :active {
        transform: scale(.95);
    }
`;