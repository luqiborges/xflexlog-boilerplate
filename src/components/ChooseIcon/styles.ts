import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

interface IIconContainer {
  size: number;
  margin: boolean;
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
  font-family: ${metrics.fontBlack};
  color: ${colors.black};
`;

export const TitleContainer = styled.View`
  margin-top: 35px;
  width: 100%;
`;

export const InputContainer = styled.View`
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  width: 100%;
  padding: 0px ${metrics.basePadding}px;
  height: 55px;
`;

export const RightInputButton = styled.View`
  width: 70px;
  height: 55px;
  background-color: ${colors.grey3};
  border-top-right-radius: ${metrics.baseRadiusLow}px;
  border-bottom-right-radius: ${metrics.baseRadiusLow}px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${colors.grey3};
  color: ${colors.quaternaryText};
  font-family: ${metrics.fontBold};
  font-size: ${metrics.fontSizeLow}px;
  border-top-left-radius: ${metrics.baseRadiusLow}px;
  border-bottom-left-radius: ${metrics.baseRadiusLow}px;
  padding: ${metrics.basePadding}px;
`;

export const IconsScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: ${metrics.basePadding}px;
`;

export const IconsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const IconContainer = styled.TouchableOpacity<IIconContainer>`
  width: ${props => (props.size ? props.size : 30)}px;
  height: ${props => (props.size ? props.size : 30)}px;
  margin-right: ${props => (props.margin ? 15 : 0)}px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props =>
    props.selected ? colors.secondary : colors.white};
`;

export const IconNotFound = styled.Text`
  font-size: ${metrics.fontSizeMedium}px;
  font-family: ${metrics.fontBold};
  color: ${colors.grey1};
  margin-top: 50px;
  text-align: center;
`;
