import { Error404, ErrorText, FirstContainer, FirstContent, TextContent } from "./FirstElements";
import { ContentMain } from "../../../../styles";
import Logo from "../../../../assets/logo.svg"

const FirstSection = () => {
    return (
        <FirstContainer>
            <ContentMain>
                <FirstContent>
                    <TextContent>
                        <Error404>404</Error404>
                        <ErrorText>Página no disponible</ErrorText>
                    </TextContent>
                </FirstContent>
            </ContentMain>
        </FirstContainer>
    );
};

export default FirstSection;