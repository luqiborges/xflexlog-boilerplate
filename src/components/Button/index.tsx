import React from 'react';
import { ViewStyle } from 'react-native';
import Loading from '~/components/Loading';
import { Container, Text } from './styles';

const Button: React.FC<{
  children: Element;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  loading?: boolean;
  onPress: () => any;
  style?: ViewStyle;
}> = ({
  children,
  width = 170,
  height = 55,
  borderRadius = 10,
  style,
  loading = false,
  ...rest
}) => {
  return (
    <Container
      style={style}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      {loading ? <Loading /> : <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
