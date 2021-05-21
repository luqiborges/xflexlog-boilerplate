import React from 'react';

// Libs
import { useNavigation } from '@react-navigation/core';

// Icon
import MetricIcon from '~/assets/svgs/gaugeIcon.svg';

// Styles
import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Description,
} from './styles';

import { colors } from '~/styles';

const CardType: React.FC<{
  title: string;
  description: string;
  IconElement: any;
  action: () => any;
}> = ({ title, description, IconElement, action }) => {
  return (
    <Container onPress={action}>
      <IconContainer>
        <IconElement
          width={35}
          fill={colors.secondary}
          color={colors.secondary}
        />
      </IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};

export default CardType;
