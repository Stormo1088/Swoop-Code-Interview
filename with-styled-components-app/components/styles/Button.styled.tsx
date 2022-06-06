import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1em;
    background: ${({ theme }) => theme.colors.darkblue};
    border-color: ${({ theme }) => theme.colors.darkblue};
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
`;