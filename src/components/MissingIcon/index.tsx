import React from 'react';
import { Text, View } from 'react-native';

import { Container, Title } from './styles';

import NotFoundIcon from '~/assets/images/missingIcon.svg';

const MissingIcon: React.FC = () => {
  return (
    <Container>
      <Title>
        Make sure your speeling is correct{'\n'}
        and/or try a simple search
      </Title>
      <NotFoundIcon />
    </Container>
  );
};

export default MissingIcon;
