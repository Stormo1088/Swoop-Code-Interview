import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledButton = styled.button`
    padding-top: 0em;
    padding-right: 4em;
    background: ${({ theme }) => theme.colors.darkblue};
    border: none;
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
    font-size: medium;
`;