import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, metrics } from '~/styles';

export const Icon = styled(MaterialCommunityIcons).attrs(props => {
  return {
    name: props.name,
    color: props.color ? props.color : colors.primaryText,
    size: props.size ? props.size : metrics.baseIconsLow,
  };
})``;
