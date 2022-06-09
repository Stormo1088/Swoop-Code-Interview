import styled from "styled-components";
import { devices } from "../../pages/_app";

export const StyledHeader = styled.header`
    padding: 1em;
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
    margin: auto;
    text-align: center;

    @media ${devices.laptop} {
        max-width: 800px;
    }

    @media ${devices.desktop} {
        max-width: 1400px;
    };
`