import React, { useEffect, useState } from 'react';
import { ProgressCircle } from 'react-native-svg-charts';

import { Container } from './styles';

interface GaugeCardProps {
  current: number;
  min: number;
  max: number;
  cardWidth?: number;
  cardHeight?: number;
}

const GaugeCard: React.FC<GaugeCardProps> = ({
  current,
  min,
  max,
  cardWidth = 168,
  cardHeight = 180,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let newProgress = Number(current / (max - min));
    setProgress(newProgress);
  }, [current]);

  return (
    <Container cardWidth={cardWidth} cardHeight={cardHeight}>
      <ProgressCircle
        style={{ height: cardHeight / 1.5, paddingTop: 0 }}
        progress={progress}
        backgroundColor={'#757575'}
        progressColor={'#FFFFFF'}
        strokeWidth={12}
        startAngle={Math.PI}
        endAngle={Math.PI * 3}
      />
    </Container>
  );
};

export default GaugeCard;
