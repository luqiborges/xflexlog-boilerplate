import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

interface IContainer {
  cardWidth: number;
  cardHeight: number;
}

export const Container = styled.View<IContainer>`
  width: ${props => (props.cardWidth ? props.cardWidth : 150)}px;
  height: ${props => (props.cardHeight ? props.cardHeight : 100)}px;
  padding: ${metrics.basePadding / 2}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${colors.tertiary};
  border-radius: ${metrics.baseRadiusLow}px;
  justify-content: center;
  align-items: center;
`;
