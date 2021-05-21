import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import Icon from '~/components/Icon';
import TextInput from '~/components/TextInput';
import {
  Container,
  SelectIconContainer,
  Text,
  TextInputContainer,
  SmallText,
  SmallTextContainer,
  EmptyView,
} from './styles';
import { colors, metrics } from '~/styles';

const IconTextInput: React.FC<{
  icon?: string | undefined;
  iconColor?: string | undefined;
  value?: string | undefined;
  onChangeText?: (text: string | undefined) => void;
  onPress?: () => void;
  placeholder?: string | undefined;
}> = ({
  icon = 'plus',
  iconColor = colors.primaryText,
  value = undefined,
  onChangeText = () => {},
  onPress = () => {},
  placeholder = '',
}) => {
  return (
    <Container>
      <View>
        <Text>Select a icon</Text>
        <SelectIconContainer onPress={onPress}>
          <Icon name={icon} size={metrics.baseIconsHigh} color={iconColor} />
        </SelectIconContainer>
      </View>
      <TextInputContainer>
        <EmptyView />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        <SmallTextContainer>
          <SmallText>{value ? value.length : '0'} / 30</SmallText>
        </SmallTextContainer>
      </TextInputContainer>
    </Container>
  );
};

export default IconTextInput;
