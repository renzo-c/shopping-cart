import React from 'react';
import styled from 'styled-components';
import { colors, widths } from '../../styles';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink href="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={`/images/lunatic-panda.png`} />
              </LogoContainer>
              <Title>
                <h3>Shopping Cart</h3>
                <div>GraphQL Proof of Concept</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: '#FFF'
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1
});

const HomeLink = styled.a({
  textDecoration: 'none'
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.text,
  ':hover': {
    color: colors.textHover
  }
});

const LogoContainer = styled.div({
  display: 'flex',
  alignSelf: 'center'
});

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1.2em',
    marginBottom: 0
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '1em',
    // paddingLeft: 2
  },
  borderLeft: '1px solid black',
  margin: '0 15px',
  padding: '0 15px'
});

export default Header;
