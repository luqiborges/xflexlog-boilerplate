import React, { useMemo } from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import Icon from '~/components/Icon';
import { DotsContainer, RowPopover, TextPopover } from './styles';
import { colors, metrics } from '~/styles';
import Svg from 'react-native-svg';

const { Popover } = renderers;

interface IPopoverItem {
  name: string;
  iconName: string;
  action: () => any;
  SVG?: Svg | undefined;
}

interface IPopover {
  items: IPopoverItem[];
  preferredPlacement?: string;
  background?: string;
  color?: string;
  width?: number | undefined;
}

const DotsPopover: React.FC<IPopover> = ({
  items,
  preferredPlacement = 'left',
  background = colors.primary,
  color = colors.primaryText,
  width = 140,
}) => {
  const triggerStyles = useMemo(
    () => ({
      triggerTouchable: {
        underlayColor: colors.transparent,
      },
    }),
    [],
  );

  return (
    <Menu renderer={Popover} rendererProps={{ preferredPlacement }}>
      <MenuTrigger customStyles={triggerStyles}>
        <DotsContainer style={{ backgroundColor: background }}>
          <Icon name="dots-vertical" size={30} color={color} />
        </DotsContainer>
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={{
          borderRadius: metrics.baseRadiusLow,
          width,
        }}
      >
        {items.map((value, index) => (
          <MenuOption onSelect={value.action} key={index}>
            <RowPopover>
              <Icon
                name={value.iconName}
                size={metrics.baseIconsLow}
                color={colors.secondaryText}
                SVG={value.SVG}
              />
              <TextPopover>{value.name}</TextPopover>
            </RowPopover>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default DotsPopover;
