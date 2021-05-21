import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.danger};
  font-family: ${metrics.fontBlack};
  font-size: ${metrics.fontSizeLow}px;
  margin-left: 5px;
`;
