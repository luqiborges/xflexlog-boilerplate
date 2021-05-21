import React from 'react';
import { View } from 'react-native';
import Icon from '../Icon';

import Svg from 'react-native-svg';

import { Container, Text } from './styles';

const ErrorCard: React.FC<{
  name?: string | undefined;
  color?: string | undefined;
  size?: number | undefined;
  SVG?: Svg | undefined;
  text?: string | undefined;
}> = ({ name, color, text, size = 52 }) => {
  return (
    <Container>
      <Icon name={name} size={size} />
      <Text>{text}</Text>
    </Container>
  );
};

export default ErrorCard;
