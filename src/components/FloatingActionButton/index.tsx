import React, { useRef } from 'react';
import { Animated, Platform } from 'react-native';
import ActionButton, {
  ActionButtonProperties,
} from 'react-native-action-button';
import Icon from '~/components/Icon';
import { colors, metrics } from '~/styles';

// Rosolve terminal Warning from the useNativeDriver
interface ExtendedButton extends ActionButton {
  anim: Animated.Value;
  animateButton: Function;
  state: {
    active: boolean;
    resetToken: any;
  };
  reset: Function;
  mounted: boolean;
  props: ActionButtonProperties & { onReset: Function };
}
(ActionButton.prototype as ExtendedButton).animateButton = function (
  animate = true,
) {
  if (this.state.active) return this.reset();
  if (animate) {
    Animated.spring(this.anim, { toValue: 1, useNativeDriver: false }).start();
  } else {
    this.anim.setValue(1);
  }
  this.setState({ active: true, resetToken: this.state.resetToken });
};
(ActionButton.prototype as ExtendedButton).reset = function (animate = true) {
  if (this.props.onReset) this.props.onReset();
  if (animate) {
    Animated.spring(this.anim, { toValue: 0, useNativeDriver: false }).start();
  } else {
    this.anim.setValue(0);
  }
  setTimeout(() => {
    if (this.mounted) {
      this.setState({ active: false, resetToken: this.state.resetToken });
    }
  }, 250);
};

interface IItems {
  label: string;
  background: string;
  color: string;
  iconName: string;
  action: () => void;
}

interface IActionButton {
  background?: string;
  color?: string;
  action?: () => void;
}

const FloatingActionButton: React.FC<{
  items?: IItems[];
  actionButton: IActionButton;
}> = ({
  items = [],
  actionButton = {
    background: colors.tertiary,
    color: colors.primaryText,
    action: undefined,
  },
}) => {
  const actionButtonRef = useRef<any>(null);

  return (
    <ActionButton
      ref={actionButtonRef}
      size={60}
      onPress={actionButton.action}
      bgColor={colors.darkTransparent}
      buttonColor={
        actionButton?.background ? actionButton.background : colors.tertiary
      }
      offsetX={20}
      offsetY={120}
      useNativeFeedback={false}
      shadowStyle={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        elevation: 10,
      }}
      renderIcon={() => (
        <Icon
          name="plus"
          color={colors.primaryText}
          size={metrics.baseIconsHigh}
        />
      )}
    >
      {!actionButton.action &&
        items.map((item, index) => (
          <ActionButton.Item
            key={index}
            size={48}
            buttonColor={item.background}
            onPress={item.action}
            title={item.label}
            useNativeFeedback={false}
            nativeFeedbackRippleColor={colors.transparent}
            textContainerStyle={{
              backgroundColor: item.background,
              borderColor: item.background,
              height: 30,
              width: 180,
              top: 10,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            textStyle={{
              paddingTop: Platform.OS === 'android' ? 3 : 0,
              color: item.color,
              fontFamily: metrics.fontNormal,
              fontSize: metrics.fontSizeMedium,
            }}
          >
            <Icon
              name={item.iconName}
              color={colors.primaryText}
              size={metrics.baseIconsMedium}
            />
          </ActionButton.Item>
        ))}
    </ActionButton>
  );
};

export default FloatingActionButton;
