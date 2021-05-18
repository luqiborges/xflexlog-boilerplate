import React, { useEffect, useCallback, useRef } from 'react';
import { ActivityIndicator } from 'react-native';

// Libs
import { useAppSelector } from '~/store/hooks';
import { round } from 'mathjs';

// Components
import Icon from '~/components/Icon';

// Styles
import {
  Container,
  Content,
  Header,
  Title,
  DeleteCardButton,
  ValueContainer,
  TextValue,
} from './styles';
import { colors, metrics } from '~/styles';

const MetricCard: React.FC<{
  dataTag?: string;
  cardWidth?: number;
  cardHeight?: number;
  title?: string;
  icon?: string;
  iconColor?: string;
  output?: string;
  numberOfDecimalPlaces?: number;
  warningThresholdValue?: number;
  dangerThresholdValue?: number;
  normalThresholdColor?: string;
  warningThresholdColor?: string;
  dangerThresholdColor?: string;
  onDelete?: () => void;
}> = ({
  dataTag,
  cardWidth = 150,
  cardHeight = 100,
  title = '',
  icon,
  iconColor,
  output = 'current',
  numberOfDecimalPlaces = 2,
  warningThresholdValue,
  dangerThresholdValue,
  normalThresholdColor = colors.primaryText,
  warningThresholdColor,
  dangerThresholdColor,
  onDelete = undefined,
}) => {
  // const transmitter = useAppSelector(state =>
  //   state.projects.transmitters.find(
  //     transmitter => transmitter.dataTag === dataTag,
  //   ),
  // );
  const values = useRef<{
    current: number | undefined;
    min: number | undefined;
    max: number | undefined;
  }>({
    current: undefined,
    min: undefined,
    max: undefined,
  });
  const tare = useRef<number>(0);

  // useEffect(() => {
  //   if (transmitter?.value) {
  //     if (
  //       values.current.current === undefined &&
  //       values.current.min === undefined &&
  //       values.current.max === undefined
  //     ) {
  //       values.current = {
  //         current: transmitter.value,
  //         min: transmitter.value,
  //         max: transmitter.value,
  //       };
  //     }
  //     values.current = {
  //       current: transmitter.value,
  //       min:
  //         values.current.min && values.current.min > transmitter.value
  //           ? transmitter.value
  //           : values.current.min,
  //       max:
  //         values.current.max && values.current.max < transmitter.value
  //           ? transmitter.value
  //           : values.current.max,
  //     };
  //   }
  // }, [transmitter]);

  const renderThresholdColor = useCallback(() => {
    if (
      values.current[output as keyof typeof values.current] !== undefined &&
      warningThresholdValue !== undefined &&
      dangerThresholdValue !== undefined &&
      warningThresholdColor &&
      dangerThresholdColor
    ) {
      if (
        (values.current[output as keyof typeof values.current] || 0) <
        warningThresholdValue
      ) {
        return normalThresholdColor;
      } else {
        if (
          (values.current[output as keyof typeof values.current] || 0) >=
            warningThresholdValue &&
          (values.current[output as keyof typeof values.current] || 0) <
            dangerThresholdValue
        ) {
          return warningThresholdColor;
        } else {
          return dangerThresholdColor;
        }
      }
    } else {
      return normalThresholdColor;
    }
  }, [transmitter]);

  const renderValue = useCallback(() => {
    if (values.current[output as keyof typeof values.current] !== undefined) {
      if (numberOfDecimalPlaces !== -1) {
        return values.current[output as keyof typeof values.current];
      } else {
        return (
          round(
            values.current[output as keyof typeof values.current] || 0,
            numberOfDecimalPlaces,
          ) - tare.current
        );
      }
    } else {
      return '';
    }
  }, [values.current]);

  if (cardWidth > 0)
    return (
      <Container cardWidth={cardWidth} cardHeight={cardHeight}>
        <Content>
          <Header>
            <Icon name={icon} color={iconColor} />
            <Title numberOfLines={1}>{title ? title : 'Metric'}</Title>
            {onDelete && (
              <DeleteCardButton onPress={onDelete}>
                <Icon
                  name="close-circle-outline"
                  size={metrics.baseIconsMedium}
                  color={colors.quaternary}
                />
              </DeleteCardButton>
            )}
          </Header>
          <ValueContainer>
            {transmitter?.value !== undefined ? (
              <TextValue color={renderThresholdColor()}>
                {renderValue()}
              </TextValue>
            ) : (
              <ActivityIndicator size="large" color={colors.white} />
            )}
          </ValueContainer>
        </Content>
      </Container>
    );

  return <></>;
};

export default MetricCard;
