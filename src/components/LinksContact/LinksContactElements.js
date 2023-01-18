import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors, shadows } from "../../theme"

const color = {
    linkBg: colors.secondary600,
}

export const LinksContainer = styled.div`
    z-index: 1000;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const LinkContact = styled(motion.a)`
    padding: .8rem 1rem;
    cursor: pointer;
    background: ${color.linkBg};
    border-radius: .8rem;
    box-shadow: ${shadows.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinkIcon = styled.img`
    width: 32px;
`;