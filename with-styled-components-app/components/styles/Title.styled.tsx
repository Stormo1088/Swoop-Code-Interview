import styled from "styled-components";
import { devices } from "../../pages/_app";

export const StyledTitle = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: auto;
    text-align: center;

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

    @media ${devices.laptop} {
        max-width: 800px;
    }

    @media ${devices.desktop} {
        max-width: 1400px;
    };
`;