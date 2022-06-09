import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledTitle = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    min-width: 800px;

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 60px;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    h2 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 40px;
        margin-top: 5px;
    }
`;