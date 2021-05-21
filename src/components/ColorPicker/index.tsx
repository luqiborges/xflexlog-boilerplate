import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

// Libs
//import { HueSaturationValuePicker } from 'react-native-reanimated-color-picker';

// @ts-ignore
import ColorPickerLib from 'react-native-wheel-color-picker';

// Services
import { hex2rgb, hsv2rgb, rgb2hex, rgb2hsv } from '~/services/baseConverter';
import { elementWidthOnGrid } from '~/services/baseLayoutFunction';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

// Styles
import {
  Container,
  Title,
  TitleContainer,
  InputContainer,
  LeftInputButton,
  LeftInputButtonText,
  Input,
  ColorPickerContainer,
  LatestUsedColors,
  CircleColor,
  CircleColorButton,
} from './styles';
interface IColorPickerHandle {
  getCurrentColor(): string;
}

const ColorPicker = React.forwardRef<
  IColorPickerHandle,
  { initialColor: string; scroll: (value: boolean) => any }
>(({ scroll = () => {}, initialColor = '#ffffff' }, ref) => {
  const latestColorsUsed = useAppSelector(
    state => state.config.latestColorsUsed,
  );

  const [hexValue, setHexValue] = useState<string>('');
  const [color, setColor] = useState<string>(
    initialColor ? initialColor : '#FFFFFF',
  );

  const [circleColorWidth, setCircleColorWidth] = useState<number>(150);
  const [circleColorPerLine, setCircleColorPerLine] = useState(6);

  const [flag, setFlag] = useState<boolean>(false);

  const onChange = useCallback(
    (value: string) => {
      const regex = /^[0-9a-f]+/i;
      const input = regex.exec(value.replace('#', ''));

      let newValue = input ? '#' + input?.toString() : '';

      setHexValue(newValue);

      if (newValue.length >= 7) {
        setColor(newValue);
        setFlag(!flag);
      }
    },
    [flag],
  );

  const renderPicker = useCallback(() => {
    if (!flag)
      return (
        <ColorPickerLib
          style={{ width: 280 }}
          color={color}
          onColorChange={(color: string) => {
            scroll(false);
            setHexValue(color.toUpperCase());
            setColor(color.toUpperCase());
          }}
          onColorChangeComplete={(color: string) => {
            scroll(true);
            setHexValue(color.toUpperCase());
            setColor(color.toUpperCase());
          }}
          thumbSize={40}
          sliderSize={30}
          noSnap={false}
          swatches={false}
        />
      );

    setTimeout(() => {
      setFlag(!flag);
    }, 1);

    return <></>;
  }, [flag, color]);

  useImperativeHandle(ref, () => ({
    getCurrentColor: () => {
      return color;
    },

    setCurrentColor: (value: string) => {
      onChange(value);
    },
  }));

  return (
    <Container
      onLayout={event => {
        const width = elementWidthOnGrid(
          event.nativeEvent.layout.width,
          45,
          15,
        );

        setCircleColorPerLine(width[0]);
        setCircleColorWidth(width[1]);
      }}
    >
      <Title>Choose a color</Title>
      <ColorPickerContainer>{renderPicker()}</ColorPickerContainer>

      <TitleContainer>
        <Title>Put the HEX code:</Title>
      </TitleContainer>
      <InputContainer>
        <LeftInputButton>
          <LeftInputButtonText>#HEX</LeftInputButtonText>
        </LeftInputButton>
        <Input
          maxLength={7}
          autoCapitalize="characters"
          autoCorrect={false}
          onChangeText={onChange}
          value={hexValue}
          placeholder="#000000"
        />
      </InputContainer>

      <TitleContainer>
        <Title>Latest colors used</Title>
      </TitleContainer>
      <LatestUsedColors>
        {latestColorsUsed?.map((value, index) => {
          return (
            <CircleColorButton key={index} onPress={() => onChange(value)}>
              <CircleColor
                size={circleColorWidth}
                marginCircle={!((index + 1) % circleColorPerLine === 0)}
                background={value}
                key={index}
              />
            </CircleColorButton>
          );
        })}
      </LatestUsedColors>
    </Container>
  );
});

export default ColorPicker;
