import styled from "styled-components";
import { devices } from "../../pages/_app";

export const StyledClaimButton = styled.button`
    margin: auto;
    text-align: center;

    padding-left: 1px;
    padding-right: 1px;
    padding: 15px 32px; 
    min-width: max-content;
    background: ${({ theme }) => theme.colors.lightyellow};
    border-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.brown};
    font-weight: bolder;    
    border-width: 6px;
    border-radius: 1px;
    margin-left: 20px;
    margin-top: 5px;

    @media ${devices.laptop} {
        max-width: 800px;
        margin-top: 1em;
        margin-left: 200px;
        margin-right: 200px;
    }

    @media ${devices.desktop} {
        max-width: 1400px;
        margin-top: 1em;
        margin-left: 200px;
        margin-right: 200px;
    };
`;