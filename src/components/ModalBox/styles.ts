import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  width: 270px;
  height: 157px;
  border-radius: 10px;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  padding-top: 16px;
  font-size: 22px;
  font-family: ${metrics.fontBlack};
  padding-left: 22px;
`;

export const Body = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  padding-left: 18px;
  padding-right: 18px;
`;

export const BodyText = styled.Text`
  text-align: center;
  font-size: 16px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonText = styled.Text`
  padding-right: 18px;
  padding-top: 18px;
  font-size: 16px;
`;
