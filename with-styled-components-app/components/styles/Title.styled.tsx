import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledTitle = styled.div`
    padding: 1em;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;