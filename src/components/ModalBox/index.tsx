import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { colors } from '~/styles';

import {
  Body,
  Container,
  Header,
  Title,
  BodyText,
  Footer,
  ButtonText,
} from './styles';

import Modal from 'react-native-modal';

interface IModalBox {
  title: string;
  text: string;
  type: 'error' | 'warning' | 'save';
  isVisible: boolean;
  buttonLeftText?: string;
  buttonRightText: string;
  handleLeftButton?: () => void;
  handleRightButton: () => void;
}

const ModalBox: React.FC<IModalBox> = ({
  title,
  text,
  type,
  isVisible,
  buttonLeftText,
  buttonRightText,
  handleLeftButton,
  handleRightButton,
}) => {
  const [showSecondButton, setShowSecondButton] = useState(true);
  const [nameIcon, setNameIcon] = useState('save');

  useEffect(() => {
    if (type === 'error') {
      setShowSecondButton(false);
      setNameIcon('closecircleo');
    }
    if (type === 'warning') {
      setNameIcon('exclamationcircleo');
    }
    if (type === 'save') {
      setNameIcon('save');
    }
  }, [type]);

  return (
    <Modal
      isVisible={isVisible}
      style={{ alignItems: 'center' }}
      backdropColor={'white'}
    >
      <Container>
        <Header>
          <Icon
            name={nameIcon}
            size={type === 'save' ? 46 : 40}
            color={type === 'save' ? colors.normal : colors.danger}
            style={{ position: 'absolute', left: 18, top: 10 }}
          />
          <Title>{title}</Title>
        </Header>
        <Body>
          <BodyText>{text}</BodyText>
        </Body>
        <Footer>
          {showSecondButton && (
            <TouchableOpacity onPress={handleLeftButton}>
              <ButtonText>{buttonLeftText}</ButtonText>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleRightButton}>
            <ButtonText>{buttonRightText}</ButtonText>
          </TouchableOpacity>
        </Footer>
      </Container>
    </Modal>
  );
};

export default ModalBox;
