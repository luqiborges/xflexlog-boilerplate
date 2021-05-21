import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
`;

export const SelectIconContainer = styled.TouchableOpacity`
  height: 90px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-radius: ${metrics.baseRadiusLow}px;
  border: 1px solid ${colors.primaryText};
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-family: ${metrics.fontBold};
  color: ${colors.secondaryText};
`;

export const TextInputContainer = styled.View`
  flex: 1;
  margin-left: ${metrics.baseMargin}px;
  justify-content: space-between;
`;

export const SmallText = styled.Text`
  font-size: ${metrics.fontSizeLow}px;
  font-family: ${metrics.fontBold};
  color: ${colors.secondaryText};
`;

export const SmallTextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
  margin-right: 5px;
`;

export const EmptyView = styled.View`
  flex: 1;
`;
