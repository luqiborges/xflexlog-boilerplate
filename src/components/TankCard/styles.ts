import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

interface IContainer {
  cardWidth: number;
  cardHeight: number;
}

export const Container = styled.View<IContainer>`
  width: ${props => (props.cardWidth ? props.cardWidth : 150)}px;
  height: ${props => (props.cardHeight ? props.cardHeight : 100)}px;
  background-color: ${colors.tertiary};
  border-radius: ${metrics.baseRadiusLow}px;
  justify-content: center;
  align-items: center;
`;

export const Tank = styled.View<IContainer>`
  width: ${props => (props.cardWidth ? props.cardWidth / 2.5 : 140)}px;
  height: ${props => (props.cardHeight ? props.cardHeight / 1.5 : 100)}px;
`;

export const TankBorder = styled.View<IContainer>`
  width: ${props => (props.cardWidth ? props.cardWidth / 2.5 : 140)}px;
  height: ${props => (props.cardHeight ? props.cardHeight / 1.5 : 100)}px;
  border-radius: ${metrics.baseRadiusLow}px;
  border-color: ${colors.white};
  border-width: 5px;
`;

export const TankContent = styled.View<IContainer>`
  position: absolute;
  bottom: 2.5px;
  width: ${props => (props.cardWidth ? props.cardWidth / 2.5 : 140)}px;
  height: ${props =>
    props.cardHeight !== undefined ? props.cardHeight / 1.5 - 5 : 0}px;
  border-radius: ${metrics.baseRadiusLow / 1.5}px;
  background-color: #defb2d;
`;
