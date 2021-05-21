import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

interface IButtonStyled {
  width: number | string;
}

export const Container = styled.TouchableOpacity<IButtonStyled>`
  height: 55px;
  width: ${props =>
    props.width
      ? typeof props.width === 'string'
        ? props.width
        : `${props.width}px`
      : '170px'};
  background: ${colors.secondary};
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  border-radius: ${metrics.baseRadiusLow}px;
`;

export const Text = styled.Text`
  color: ${colors.primaryText};
  font-size: ${metrics.fontSizeLow}px;
  font-weight: bold;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;
