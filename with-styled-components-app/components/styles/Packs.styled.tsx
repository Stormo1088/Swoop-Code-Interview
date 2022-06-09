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
    
    min-width: 15cm;

    img {
        float: left;
        display: block;
        width: 120px;
        margin-left: auto;
        margin-right: 30px;
    }

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 20px;
        margin-bottom: 2px;
        margin-top: 2em;
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
        margin-bottom: 5em;
    }
`;