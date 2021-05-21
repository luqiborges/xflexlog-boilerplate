import React from 'react';
import { ViewStyle } from 'react-native';
import Loading from '~/components/Loading';
import { Container, Text } from './styles';

const ButtonLight: React.FC<{
  children: Element;
  width?: number | string;
  loading?: boolean;
  onPress: () => any;
  style?: ViewStyle;
}> = ({ children, width = 170, style, loading = false, ...rest }) => {
  return (
    <Container style={style} width={width} {...rest}>
      {loading ? <Loading /> : <Text>{children}</Text>}
    </Container>
  );
};

export default ButtonLight;
