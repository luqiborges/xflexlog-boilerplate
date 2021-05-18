import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Container, TankBorder, TankContent, Tank } from './styles';

interface TankCardProps {
  current: number;
  min: number;
  max: number;
  cardWidth?: number;
  cardHeight?: number;
}

const TankCard: React.FC<TankCardProps> = ({
  current,
  min,
  max,
  cardWidth = 168,
  cardHeight = 180,
}) => {
  const [heightPercent, setHeightPercent] = useState(1);

  useEffect(() => {
    let heightPercent = (current - min) / (max - min);
    if (heightPercent > 1) {
      heightPercent = 1;
    }
    setHeightPercent(heightPercent);
  }, [current]);

  return (
    <Container cardWidth={cardWidth} cardHeight={cardHeight}>
      <Tank cardWidth={cardWidth} cardHeight={cardHeight}>
        <TankContent
          cardWidth={cardWidth}
          cardHeight={cardHeight * heightPercent}
        ></TankContent>
        <TankBorder cardWidth={cardWidth} cardHeight={cardHeight}></TankBorder>
      </Tank>
    </Container>
  );
};

export default TankCard;
