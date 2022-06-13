import React from 'react';
import styled from 'styled-components/macro';
import ScreenReaderText from '../ScreenReaderText';

export const SpinnerHolder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerBorder = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -.125em;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  border-width: 3px;
  animation: .75s linear infinite spinner-border
}`;

export default styled(() => (
  <SpinnerBorder>
    <ScreenReaderText>Loading...</ScreenReaderText>
  </SpinnerBorder>
))``;
