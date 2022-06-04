import React from 'react';
import Header from '../Header';
import styled from 'styled-components';
import { widths } from '../../styles';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  grid?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ fullWidth, children, grid }) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div<{ fullWidth?: boolean; grid?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.grid ? 'space-between' : 'center')};
  flex-direction: ${(props) => (props.grid ? 'row' : 'column')};
  align-self: center;
  padding: 1.3em;
  padding-bottom: 3em;
  max-width: ${(props) => (props.fullWidth ? null : widths.regularPageWidth + 'px')};
  width: 100%;
`;

export default Layout;
