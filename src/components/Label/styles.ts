import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View``;

export const Title = styled.Text<{ align: string }>`
  font-family: ${metrics.fontBold};
  color: ${colors.secondaryText};
  font-size: ${metrics.fontSizeMedium}px;
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export const Value = styled.Text<{ align: string }>`
  font-family: ${metrics.fontNormal};
  color: ${colors.primaryText};
  font-size: ${metrics.fontSizeHigh}px;
  margin-top: 5px;
  text-align: ${props => (props.align ? props.align : 'left')};
`;
