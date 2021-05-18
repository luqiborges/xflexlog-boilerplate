import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export interface IWarningCard {
  indicator: 'normal' | 'warning' | 'danger';
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 180px;
  background-color: ${colors.tertiary};
  border-radius: 20px;
`;

export const Circle = styled.View`
  width: 106px;
  height: 106px;
`;

export const CircleBorder = styled.View`
  position: absolute;
  width: 106px;
  height: 106px;
  border-radius: 53px;
  border-color: ${colors.white};
  border-width: 4px;
`;

export const CircleContent = styled.View`
  width: 105px;
  height: 105px;
  border-radius: 53px;
`;
