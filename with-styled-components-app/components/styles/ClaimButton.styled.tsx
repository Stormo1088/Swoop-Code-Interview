import { text } from "node:stream/consumers";
import styled from "styled-components";

export const StyledClaimButton = styled.button`
    margin-top: 1em;
    margin-left: 200px;
    margin-right: 200px;
    padding-left: 1px;
    padding-right: 1px;
    background: ${({ theme }) => theme.colors.yellow};
    border-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 4px;
    color: black;
`;