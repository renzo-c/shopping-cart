import React from 'react';
import styled from 'styled-components';
import { colors, baseBoxStyles } from '../../styles';

interface SearchBoxProps {
  term?: string;
  onChangeTerm(term: string): void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ term, onChangeTerm }) => {
  return (
    <Input
      inputColor={colors.text}
      placeholder="Search products ..."
      value={term}
      type="test"
      onChange={(e) => onChangeTerm(e.target.value)}
    />
  );
};

const Input = styled.input<{ inputColor?: string }>`
  flex: 1;
  ${baseBoxStyles}
`;

export default SearchBox;
