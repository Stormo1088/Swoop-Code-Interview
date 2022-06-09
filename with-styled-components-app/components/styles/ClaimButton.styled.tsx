import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledClaimButton = styled.button`
    margin-top: 1em;
    margin-left: 200px;
    margin-right: 200px;
    padding-left: 1px;
    padding-right: 1px;
    padding: 15px 32px;    
    background: ${({ theme }) => theme.colors.lightyellow};
    border-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.brown};
    font-weight: bolder;    
    border-width: 6px;
    border-radius: 1px;
`;