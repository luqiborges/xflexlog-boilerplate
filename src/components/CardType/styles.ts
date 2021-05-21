import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  background-color: ${colors.tertiary};
  flex-direction: row;
  border-radius: ${metrics.baseRadiusMedium}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const IconContainer = styled.View`
  width: 60px;
  justify-content: center;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.primaryText};
  font-size: ${metrics.fontSizeMedium}px;
  font-family: ${metrics.fontBlack};
`;

export const Description = styled.Text`
  color: ${colors.secondaryText};
  font-size: ${metrics.fontSizeLow}px;
  font-family: ${metrics.fontBold};
`;
