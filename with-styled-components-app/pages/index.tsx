import styled from 'styled-components'
import { Container } from '../components/styles/Container.styled'
import { StyledHeader } from '../components/styles/Header.styled';
import { StyledTitle } from '../components/styles/Title.styled';
import { StyledButton } from '../components/styles/Button.styled';

export default function Home() {
  return ( 
    <> 
      <StyledHeader>
        <StyledButton>HOME</StyledButton>
        <StyledButton>STORE</StyledButton>
        <StyledButton>MARKETPLACE</StyledButton>
        <StyledButton>DEXICON</StyledButton>
      </StyledHeader>
      <Container>
        <StyledTitle>
          <h1>My Inbox</h1>
          <h3>Redeen your packs</h3>
        </StyledTitle>
      </Container>
      </>
    );
}