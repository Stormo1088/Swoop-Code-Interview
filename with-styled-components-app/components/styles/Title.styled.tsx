import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledTitle = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;