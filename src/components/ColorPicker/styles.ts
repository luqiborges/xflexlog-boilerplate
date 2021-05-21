import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

interface ICircleColor {
  background: string;
  size: number;
  marginCircle: boolean;
}

export const Container = styled.View`
  width: 100%;
  background-color: white;
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

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: metrics.basePadding,
    paddingBottom: 60,
    alignItems: 'center',
  },
})``;

export const ColorPickerContainer = styled.View`
  align-items: center;
  width: 280px;
  height: 300px;
`;

export const InputContainer = styled.View`
  margin-top: 7px;
  flex-direction: row;
  width: 100%;
  height: 55px;
`;

export const LeftInputButton = styled.View`
  width: 70px;
  height: 55px;
  background-color: ${colors.secondary};
  border-top-left-radius: ${metrics.baseRadiusLow}px;
  border-bottom-left-radius: ${metrics.baseRadiusLow}px;
  align-items: center;
  justify-content: center;
`;

export const LeftInputButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.fontSizeLow}px;
  font-family: ${metrics.fontBlack};
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${colors.grey3};
  color: ${colors.secondaryText};
  font-family: ${metrics.fontBold};
  font-size: ${metrics.fontSizeLow}px;
  border-top-right-radius: ${metrics.baseRadiusLow}px;
  border-bottom-right-radius: ${metrics.baseRadiusLow}px;
  padding: ${metrics.basePadding}px;
`;

export const LatestUsedColors = styled.View`
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`;

export const CircleColor = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 3,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 5.0,

  elevation: 10,
})<ICircleColor>`
  background-color: ${props =>
    props.background ? props.background : colors.secondary};
  width: ${props => (props.size ? props.size : 45)}px;
  height: ${props => (props.size ? props.size : 45)}px;
  border-radius: ${metrics.baseRadiusHigh}px;
  margin-right: ${props => (props.marginCircle ? 15 : 0)}px;
  margin-bottom: ${props => (props.marginCircle ? 15 : 0)}px;
`;

export const CircleColorButton = styled.TouchableOpacity``;
