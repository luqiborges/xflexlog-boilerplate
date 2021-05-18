import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Circle,
  Container,
  CircleBorder,
  CircleContent,
  IWarningCard,
} from './styles';
import { colors } from '~/styles';

const WarningCard: React.FC<IWarningCard> = ({ indicator }) => {
  const [contentColor, setContentColor] = useState(colors.normal);

  useEffect(() => {
    if (indicator === 'danger') {
      setContentColor(colors.danger);
      return;
    }
    if (indicator === 'warning') {
      setContentColor(colors.warning);
      return;
    }
    setContentColor(colors.normal);
  }, [indicator]);

  return (
    <Container>
      <Circle>
        <CircleContent
          style={{ backgroundColor: contentColor }}
        ></CircleContent>
        <CircleBorder></CircleBorder>
      </Circle>
    </Container>
  );
};

export default WarningCard;
