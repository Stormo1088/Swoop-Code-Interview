import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 1em;
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
    min-width: 800px;
`