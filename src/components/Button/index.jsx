import { ButtonMain } from "./ButtonElements";

const Button = ({type, width, height, fontSize, bgColor, onClick, children, color, value = null, disabled, onMouseEnter, onMouseLeave, key}) => {

    return (
        <ButtonMain
        fontSize={fontSize}
        color={color}
        bgColor={bgColor}
        width={width}
        height={height}
        type={type}
        key={key}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            {value}
            {children}
        </ButtonMain>
    );
};

export default Button;
