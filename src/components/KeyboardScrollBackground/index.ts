import { StyleProp, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import { colors } from '~/styles';

const KeyboardScrollBackground = styled(KeyboardAwareScrollView).attrs(
  props => {
    return {
      enableOnAndroid: true,
      contentContainerStyle: props.contentContainerStyle || { flexGrow: 1 },
      showsVerticalScrollIndicator: false,
      showsHorizontalScrollIndicator: false,
      enableAutomaticScroll: true,
      contentInsetAdjustmentBehavior: 'never',
    };
  },
)`
  background: ${colors.primary};
`;

export default KeyboardScrollBackground;
