import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from '~/components/Icon';
import { colors, metrics } from '~/styles';

interface IItems {
  label: string | undefined;
  value: any;
  iconName?: string;
  icon?: () => JSX.Element;
  hidden?: boolean;
  untouchable?: boolean;
  parent?: any;
  disabled?: boolean;
  selected?: boolean;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ComboBox: React.FC<{
  value: any;
  onChangeItem: (item: any | undefined) => void;
  items?: Array<IItems>;
  placeholder?: string;
  disabled?: boolean;
  zIndex?: number;
  borderColor?: string;
  style?: ViewStyle;
  dropDownStyle?: ViewStyle;
}> = ({
  value,
  onChangeItem,
  items,
  placeholder = 'Time out',
  disabled = false,
  zIndex = 1000,
  borderColor,
  style,
  dropDownStyle,
}) => {
  const data = useMemo(() => {
    items?.forEach(item => {
      item.textStyle = {
        alignSelf: 'center',
        marginLeft: 5,
      };
      if (item.iconName) {
        item.icon = () => (
          <Icon
            name={item.iconName}
            size={metrics.baseIconsLow}
            color={colors.secondaryText}
          />
        );
      }
    });
    return items;
  }, [items]);

  return (
    <DropDownPicker
      zIndex={zIndex}
      disabled={disabled}
      items={data || []}
      defaultValue={value}
      onChangeItem={item => onChangeItem(item.value)}
      placeholder={placeholder}
      dropDownMaxHeight={200}
      containerStyle={{
        height: 55,
        ...style,
      }}
      style={{
        paddingLeft: 15,
        borderTopLeftRadius: metrics.baseRadiusLow,
        borderTopRightRadius: metrics.baseRadiusLow,
        borderBottomLeftRadius: metrics.baseRadiusLow,
        borderBottomRightRadius: metrics.baseRadiusLow,
        borderColor: borderColor ? borderColor : 'transparent',
        borderWidth: 2,
      }}
      dropDownStyle={{
        borderBottomLeftRadius: metrics.baseRadiusLow,
        borderBottomRightRadius: metrics.baseRadiusLow,
        ...dropDownStyle,
      }}
      labelStyle={{
        marginLeft: 10,
      }}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      globalTextStyle={{
        fontFamily: metrics.fontBold,
        color: colors.secondaryText,
        fontSize: metrics.fontSizeLow,
      }}
      placeholderStyle={{
        marginLeft: 5,
        color: colors.quaternaryText,
        fontFamily: metrics.fontBold,
        fontSize: metrics.fontSizeLow,
      }}
      childrenContainerStyle={{
        paddingLeft: 20,
      }}
      arrowColor={colors.secondaryText}
      arrowSize={metrics.baseIconsLow}
    />
  );
};

export default ComboBox;
