import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import { widths } from '../../styles';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ fullWidth, children }) => {
    console.log((fullWidth))
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth}>{children}</PageContainer>
    </>
  );
};

const PageContainer = styled.div<{fullWidth?: boolean}>`
  display: flex;
  justify-content: top;
  flex-direction: column;
  align-self: center;
  padding: 1.3em;
  padding-bottom: 3em;
  max-width: ${props => props.fullWidth ? null : widths.regularPageWidth + 'px'};
  width: 100%
`

export default Layout;
