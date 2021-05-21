import React from 'react';

import Button from '~/components/Button';

import { Container, Title } from './styles';

const MissingView: React.FC<{ title: string; buttonText: string }> = ({
  title,
  buttonText,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button onPress={() => console.log('eee')} width="40%">
        {buttonText}
      </Button>
    </Container>
  );
};

export default MissingView;
