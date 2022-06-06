import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 1em;
    background: ${({ theme }) => theme.colors.darkblue};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
`