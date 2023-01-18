import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn = ({ time = "1s", type = "ease" } = {}) => css`
    animation-duration: ${time};
    animation-name: ${fadeInKeyframes};
    animation-timing-function: ${type};
`

const TypingKeyframes = keyframes`
    from {
        width: 0
    }
`

const BlinkKeyframes = keyframes`
    50% {
        border-color: transparent
    }
`

export const TypingAnimation = ({ time = "1s", type = "ease" } = {}) => css`
    animation: ${TypingKeyframes} 3s steps(12), ${BlinkKeyframes} .5s infinite step-end alternate;
`
