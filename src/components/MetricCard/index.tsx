import React from 'react';

// Styles
import { Container, Content } from './styles';
import { colors, metrics } from '~/styles';

const MetricCard: React.FC<{
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
  cardWidth = 150,
  cardHeight = 100,
  value,
  warningThresholdValue,
  dangerThresholdValue,
  normalThresholdColor = colors.primaryText,
  warningThresholdColor,
  dangerThresholdColor,
}) => {
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
        <Content>{/* Add the code here */}</Content>
      </Container>
    );

  return <></>;
};

export default MetricCard;
