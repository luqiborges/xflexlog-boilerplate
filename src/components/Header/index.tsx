import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '~/components/Icon';
import {
  Container,
  IconTouchableArea,
  Title,
  TitleContainer,
  LeftIconsContainer,
  RightIconsContainer,
  EmptyContainer,
} from './styles';
import { colors, metrics } from '~/styles';
import DotsPopover from '../DotsPopover';

const Header: React.FC<{
  title: string;
  background?: string | undefined;
  leftButton?: string | undefined;
  leftButtonColor?: string | undefined;
  leftButtonFunction?: () => void;
  rightButton?: string | undefined;
  rightButtonColor?: string | undefined;
  rightButtonFunction?: () => void;
  enableSpinRightButton?: boolean | undefined;
  actions?: Array<{ action: () => void; iconName: string; name: string }>;
}> = ({
  title,
  background,
  leftButton = '',
  leftButtonColor,
  leftButtonFunction,
  rightButton = '',
  rightButtonColor,
  rightButtonFunction = () => {},
  enableSpinRightButton = false,
  actions = [],
}) => {
  const navigation = useNavigation();

  const [spinValue, setSpinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const spinRightButton = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    if (enableSpinRightButton) spinRightButton.start();
    else {
      spinRightButton.stop();
      setSpinValue(new Animated.Value(0));
    }
  }, [enableSpinRightButton]);

  const spin = useMemo(
    () =>
      spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      }),
    [spinValue],
  );

  return (
    <Container background={background}>
      {leftButton !== undefined && leftButton.length > 0 ? (
        <LeftIconsContainer>
          <IconTouchableArea
            onPress={() => {
              if (leftButtonFunction) {
                leftButtonFunction();
              } else {
                navigation.goBack();
              }
            }}
          >
            <Icon
              name={leftButton} //"arrow-left"
              size={metrics.baseIconsMedium}
              color={leftButtonColor || colors.primaryText}
            />
          </IconTouchableArea>
        </LeftIconsContainer>
      ) : (
        <EmptyContainer />
      )}
      <TitleContainer>
        <Title numberOfLines={1}>{title}</Title>
      </TitleContainer>
      {((rightButton !== undefined && rightButton.length > 0) ||
        actions.length > 0) && (
        <RightIconsContainer>
          {rightButton !== undefined && rightButton.length > 0 && (
            <IconTouchableArea onPress={rightButtonFunction}>
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Icon
                  name={rightButton} //"check"
                  size={metrics.baseIconsMedium}
                  color={rightButtonColor || colors.primaryText}
                />
              </Animated.View>
            </IconTouchableArea>
          )}

          {actions.length > 0 && (
            <DotsPopover preferredPlacement="bottom" items={actions} />
          )}
        </RightIconsContainer>
      )}

      {(rightButton === undefined || rightButton.length <= 0) &&
        actions.length <= 0 && <EmptyContainer />}
    </Container>
  );
};

export default Header;
