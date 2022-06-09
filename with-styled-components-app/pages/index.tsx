import styled from 'styled-components'
import Image from 'next/image';
import { Container } from '../components/styles/Container.styled'
import { StyledHeader } from '../components/styles/Header.styled';
import { StyledButton } from '../components/styles/HeaderButton.styled';
import { StyledTitle } from '../components/styles/Title.styled';
import { StyledPack } from '../components/styles/Packs.styled';
import { StyledClaimButton } from '../components/styles/ClaimButton.styled';


export default function Home() {
  return ( 
    <> <head></head>
    <Container>
      <StyledHeader>
        <StyledButton>HOME</StyledButton>
        <StyledButton>STORE</StyledButton>
        <StyledButton>MARKETPLACE</StyledButton>
        <StyledButton>DEXICON</StyledButton>
      </StyledHeader>
        <StyledTitle>
          <h1>My Inbox</h1>
          <h2>Redeen your packs</h2>
        </StyledTitle>
        <StyledPack>
          <img src="starter.png"/>
          <h1>You recieved 4 new packs</h1>
          <h2>Basic beast starter pack</h2>
          <h3>USD $40.00</h3>
        </StyledPack>
        <StyledPack>
          <img src="cursed.png"/>
          <h1>You recieved 2 new packs</h1>
          <h2>Cursed black pack</h2>
          <h3>USD $600.00</h3>
        </StyledPack>
        <StyledPack>
          <img src="shiny.png"/>
          <h1>You recieved 1 new packs</h1>
          <h2>Shiny Gold</h2>
          <h3>USD $999</h3>
        </StyledPack>
        <StyledClaimButton>Claim All</StyledClaimButton>
        </Container>
      </>
    );
}