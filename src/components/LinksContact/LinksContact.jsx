import { LinkContact, LinkIcon, LinksContainer } from "./LinksContactElements";
import Messenger from "../../assets/svg/facebook-messenger.svg"
import Whatsapp from "../../assets/svg/whatsapp.svg"
import Tooltip from "../Tooltip/Tooltip";

const LinksContact = () => {

    const animation = {
        initial: {
            scale: 0,
            opacity: 1
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 1
            }
        }
    }

    return (
        <LinksContainer>
            <Tooltip info="Escríbenos al Whatsapp!" width="200px">
                <LinkContact
                target="_blank"
                href="#"
                variants={animation}
                initial="initial"
                animate="animate"
                >
                    <LinkIcon src={Whatsapp} alt="Whatsapp"/>
                </LinkContact>
            </Tooltip>
        </LinksContainer>
    );
};

export default LinksContact;