import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  padding-top: 10px;
  font-size: ${metrics.fontSizeMedium}px;
  color: ${colors.white};
  text-align: center;
`;
