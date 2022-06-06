import { text } from "node:stream/consumers";
import styled from "styled-components";

export const Container = styled.div`
    padding: 4em;
    font-size: 1px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;