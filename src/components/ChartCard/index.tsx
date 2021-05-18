import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Chart from '../Chart';

// Styles
import { Container, Content } from './styles';
import { colors, metrics } from '~/styles';

const ChartCard: React.FC<{
  cardWidth?: number;
  cardHeight?: number;
  title?: string;
  value: number | undefined;
  warningThresholdValue?: number;
  dangerThresholdValue?: number;
  normalThresholdColor?: string;
  warningThresholdColor?: string;
  dangerThresholdColor?: string;
  onDelete?: () => void;
}> = ({
  cardWidth = 395,
  cardHeight = 180,
  value,
  warningThresholdValue,
  dangerThresholdValue,
  normalThresholdColor = colors.primaryText,
  warningThresholdColor,
  dangerThresholdColor,
}) => {
  const [data, setData] = useState([20, 10, 30, 40, 50, 80, 30]);

  const renderThresholdColor = () => {
    if (
      value &&
      warningThresholdValue &&
      dangerThresholdValue &&
      warningThresholdColor &&
      dangerThresholdColor
    ) {
      if (value < warningThresholdValue) {
        return normalThresholdColor;
      } else {
        if (value >= warningThresholdValue && value < dangerThresholdValue) {
          return warningThresholdColor;
        } else {
          return dangerThresholdColor;
        }
      }
    } else {
      return normalThresholdColor;
    }
  };

  if (cardWidth > 0)
    return (
      <Container cardWidth={cardWidth} cardHeight={cardHeight}>
        <Content>
          <Chart data={data} />
        </Content>
      </Container>
    );

  return <></>;
};

export default ChartCard;
