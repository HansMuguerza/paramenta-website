import styled from 'styled-components'
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { colors, shadows } from '../theme';

const ModalElement = ({showModal, setShowModal, children, header}) => {

    const overlayRef = useRef()

    const closeModal = e => {
        if (overlayRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (
        <>
            {
                showModal &&
                    <Overlay ref={overlayRef} onClick={closeModal} showModal={showModal}>
                        <Content>
                            <ButtonClose icon={faTimes} onClick={() => setShowModal(false)}/>
                            <Header>
                                <p>{header}</p>
                            </Header>
                            {children}
                        </Content>
                    </Overlay>
            }
        </>
    );
};

export default ModalElement;

const Overlay = styled.div`
    opacity: ${props => props.showModal ? 1 : 0};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.7);

    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    width: 600px;
    background: ${colors.neutral800} !important;
    /* border: 1px solid ${colors.neutral700}; */
    position: relative;
    border-radius: 1rem;
    box-shadow: ${shadows._1};
`;

const Header = styled.div`
    border-radius: 1rem 1rem 0 0;
    padding: 1.5rem;
    background: ${colors.neutral700};
    border-bottom: 1px solid ${colors.neutral600};
    > p {
        font-size: 1rem;
    }
`;

const ButtonClose = styled(FontAwesomeIcon)`
    position: absolute;
    top: 0;
    right: -65px;
    padding: 14px 18px;
    border-radius: 6px;
    font-size: 22px;
    color: ${colors.neutral300};
    background: ${colors.neutral800};
    border: 1px solid transparent;
    cursor: pointer;

    :hover {
        color: ${colors.neutral200};
        background: ${colors.neutral700};
    }
`;