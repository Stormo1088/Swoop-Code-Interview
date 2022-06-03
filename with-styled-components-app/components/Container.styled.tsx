import { text } from "node:stream/consumers";
import styled from "styled-components";

export const Container = styled.div`
    padding: 4em;
    background: ${({ theme }) => theme.colors.darkblue};
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;