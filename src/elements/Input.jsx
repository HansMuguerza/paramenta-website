import styled from 'styled-components'
import { colors } from '../theme'

const InputElement = ({onChange, value, type, placeholder, name, width, autoComplete, autoFocus, required }) => {

    return (
        <Main width={width}>
            <Placeholder>{placeholder}</Placeholder>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                required={required}
            />
        </Main>
    );
};

export default InputElement;

const Main = styled.div`
    width: ${({width}) => width};
`;

const Placeholder = styled.label`
    font-size: 12px;
    color: ${colors.neutral400};
    margin-left: 10px;
`;

const Input = styled.input`
    margin-top: 8px;
    width: 100%;
    padding: 10px 10px;
    font-size: 14px;
    color: ${colors.neutral300};
    outline: none;
    border: 1px solid ${colors.neutral600};
    background: ${colors.neutral700};
    border-radius: 10px;

    &:hover {
        border: 1px solid ${colors.neutral500};
    }

    &:focus {
        border: 1px solid ${colors.indigo400};
    }

`;
