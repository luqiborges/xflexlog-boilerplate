import styled from 'styled-components/native';
import { colors } from '~/styles';

const Loader = styled.ActivityIndicator.attrs(() => {
  return {
    color: colors.primaryText,
    size: 'small',
  };
})``;

export default Loader;
