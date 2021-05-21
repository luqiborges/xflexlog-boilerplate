import React from 'react';
import { ViewStyle } from 'react-native';
import { Container, Title, Value } from './styles';

const Label: React.FC<{
  title?: string;
  value: string | number | undefined;
  align?: string;
  style?: ViewStyle;
}> = ({ title = '', value, align = 'left', style }) => {
  return (
    <Container style={style}>
      <Title align={align}>{title}</Title>
      <Value align={align}>{value}</Value>
    </Container>
  );
};

export default Label;
