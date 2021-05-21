import React from 'react';
import { Icon as IconStyle } from './styles';
import { colors, metrics } from '~/styles';
import Svg from 'react-native-svg';

const Icon: React.FC<{
  name?: string | undefined;
  color?: string | undefined;
  size?: number | undefined;
  SVG?: Svg | undefined;
}> = ({
  name = 'arrow-left',
  color = colors.white,
  size = 30,
  SVG = undefined,
}) => {
  if (SVG) return <SVG width={size} height={size} />;

  return <IconStyle name={name} size={size} color={color} />;
};

export default Icon;
