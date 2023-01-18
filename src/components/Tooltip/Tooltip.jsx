import 'rc-tooltip/assets/bootstrap.css';
import { TooltipBox, TooltipCard, TooltipText } from "./TooltipElements";

const Tooltip = ({ children, info = "Info sin definir", place = "left", width }) => {

    return (
        <>
            <TooltipCard>
                <TooltipText>
                {children}
                </TooltipText>
                <TooltipBox width={width}>
                {info}
                </TooltipBox>
            </TooltipCard>
        </>
    );
};

export default Tooltip;