import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  fontSizeLow: 13,
  fontSizeMedium: 17,
  fontSizeHigh: 23,
  baseMargin: 20,
  basePadding: 20,
  baseRadiusLow: 10,
  baseRadiusMedium: 20,
  baseRadiusHigh: 500,
  baseIconsLow: 20,
  baseIconsMedium: 26,
  baseIconsHigh: 36,
  fontNormal: 'Lato-Regular',
  fontBold: 'Lato-Bold',
  fontBlack: 'Lato-Black',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
