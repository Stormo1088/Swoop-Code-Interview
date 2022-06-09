import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledPack = styled.div`
    padding-bottom: 1em;
    padding-right: 2em;
    margin-top: 1em;
    border-color: ${({ theme }) => theme.colors.gray};
    border-bottom-style: solid;
    margin-left: 200px;
    margin-right: 200px;
    min-width: 10cm;

    img {
        width: 120px;
        align-self: left;
    }

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 20px;
        margin-bottom: 2px;
    }

    h2{
        color: ${({ theme }) => theme.colors.gray};
        margin-top: 2px;
        margin-bottom: 2px;
        font-size: 16px;
    }

    h3{
        color: ${({ theme }) => theme.colors.darkgray};
        font-size: 12px;
        margin-top: 2px;
    }
`;