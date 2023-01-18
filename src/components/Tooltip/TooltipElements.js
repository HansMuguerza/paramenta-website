import styled from 'styled-components';

export const TooltipText = styled.div`
`;

export const TooltipBox = styled.div`
    position: absolute;
    top: calc(100% - 70%);
    right: 80px;
    visibility: hidden;
    color: transparent;
    background-color: transparent;
    width: ${({width}) => width ? width : "150px"};
    border-radius: .4rem;
    transition: visibility 0.25s, color 0.25s, background-color 0.25s, width 0.25s, padding 0.25s ease-in-out;

    /* &:before {
        content: "";
        width: 0;
        height: 0;
        right: 0px;
        top: -10px;
        position: absolute;
        border: 10px solid transparent;
        transform: rotate(135deg);
        transition: border 0.25s ease-in-out;
    } */
`;

export const TooltipCard = styled.div`
    position: relative;

    & ${TooltipText}:hover + ${TooltipBox} {
        visibility: visible;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 8px 10px;

        &:before {
            // arrow tooltip
            /* border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8); */
        }
    }
`;