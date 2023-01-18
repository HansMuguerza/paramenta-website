import { FirstContainer, FirstContent } from "./FirstElements";
import { ContentMain } from "../../../../styles"

const FirstSection = () => {
    return (
        <FirstContainer>
            <ContentMain>
                <FirstContent>
                    <h2>Nuestras plantillas web</h2>
                    <p>Escoge la que más se acerque a lo que buscas.</p>
                </FirstContent>
            </ContentMain>
        </FirstContainer>
    );
};

export default FirstSection;