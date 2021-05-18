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
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
`;
export const Title = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
  font-family: ${metrics.fontBlack};
  margin-left: 5px;
  flex: 1;
`;
export const DeleteCardButton = styled.TouchableOpacity``;

export const ValueContainer = styled.ScrollView.attrs({
  horizontal: true,
  horizontalIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexGrow: 1,
  },
})``;
export const TextValue = styled.Text<{ color: string }>`
  font-size: 30px;
  font-family: ${metrics.fontBlack};
  color: ${props => (props.color ? props.color : colors.primaryText)};
  margin-top: 5px;
`;
