import styled from "styled-components";
import { devices } from "../../pages/_app";

export const StyledPack = styled.div`
    
    border-color: ${({ theme }) => theme.colors.gray};
    border-bottom-style: solid;
    margin: auto;
    text-align: auto;

    @media ${devices.laptop} {
        max-width: 800px;
        margin-left: 200px;
        margin-right: 200px;
        padding-bottom: 1em;
        padding-right: 2em;
        margin-top: 1em;
    }

    @media ${devices.desktop} {
        max-width: 1400px;
        margin-left: 200px;
        margin-right: 200px;
        margin-right: 200px;
        padding-bottom: 1em;
        padding-right: 2em;
        margin-top: 1em;
    };
    
    min-width: 15cm;

    img {
        float: left;
        display: block;
        width: 120px;
        margin-left: auto;
        margin-right: 1em;
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