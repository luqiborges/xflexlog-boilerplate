import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View<{ background: string | undefined }>`
  background-color: ${props => props.background || colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${metrics.baseMargin}px;
  height: 50px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${metrics.fontBold};
  color: ${colors.primaryText};
`;

export const IconTouchableArea = styled.TouchableOpacity`
  border-radius: ${metrics.baseRadiusHigh}px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const LeftIconsContainer = styled.View`
  width: 70px;
  align-items: flex-start;
  margin-left: 10px;
`;

export const RightIconsContainer = styled.View`
  width: 70px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const EmptyContainer = styled.View`
  width: 70px;
  margin-right: 10px;
`;
