import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${metrics.fontSizeHigh}px;
  color: ${colors.white};
  padding-left: ${metrics.basePadding * 2}px;
  padding-right: ${metrics.basePadding * 2}px;
  padding-bottom: ${metrics.basePadding * 2}px;
`;
