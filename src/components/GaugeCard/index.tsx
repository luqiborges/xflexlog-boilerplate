import React, { useEffect, useState } from 'react';
import { ProgressCircle } from 'react-native-svg-charts';

import { Container } from './styles';

import ErrorCard from '~/components/ErrorCard';

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
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let newProgress = Number(current / (max - min));
    setProgress(newProgress);
  }, [current]);

  return (
    <Container cardWidth={cardWidth} cardHeight={cardHeight}>
      {isConnected ? (
        <ProgressCircle
          style={{ height: cardHeight / 1.5, paddingTop: 0 }}
          progress={progress}
          backgroundColor={'#757575'}
          progressColor={'#FFFFFF'}
          strokeWidth={12}
          startAngle={Math.PI}
          endAngle={Math.PI * 3}
        />
      ) : (
        <ErrorCard name="wifi-off" text="Transmitter not found" />
      )}
    </Container>
  );
};

export default GaugeCard;
