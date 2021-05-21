import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { elementWidthOnGrid } from '~/services/baseLayoutFunction';
import Icon from '~/components/Icon';

// Styles
import {
  Container,
  TitleContainer,
  Title,
  InputContainer,
  Input,
  RightInputButton,
  IconsContainer,
  IconsScroll,
  IconContainer,
  IconNotFound,
} from './styles';
import { colors } from '~/styles';
import iconsData from '~/utils/iconsData';
interface IChooseIcon {
  getCurrentIcon(): string;
  setCurrentIcon(iconName: string): void;
}

const ChooseIcon = React.forwardRef<IChooseIcon, { initialIcon?: string }>(
  ({ initialIcon = 'cogs' }, ref) => {
    const [icon, setIcon] = useState<string>(initialIcon);
    const [searchInput, setSearchInput] = useState<string>('');

    const [iconWidth, setIconWidth] = useState<number>(0);
    const [iconsPerLine, setIconsPerLine] = useState<number>(0);

    useImperativeHandle(ref, () => ({
      getCurrentIcon: () => {
        return icon;
      },

      setCurrentIcon: iconName => {
        setIcon(iconName);
      },
    }));

    const icons = useMemo(() => {
      const data: typeof iconsData = [];
      const formattedSearchInput = searchInput.toLowerCase();

      iconsData.forEach((item, index) => {
        if (item.tags.includes(formattedSearchInput)) data.push(item);
      });

      return data;
    }, [searchInput]);

    return (
      <Container>
        <Title>Choose a icon</Title>

        <InputContainer>
          <Input
            autoCorrect={false}
            onChangeText={text => setSearchInput(text)}
            value={searchInput}
            placeholder="Search your icon"
          />

          <RightInputButton>
            <Icon name="magnify" color={colors.quaternaryText} size={30} />
          </RightInputButton>
        </InputContainer>

        <IconsScroll
          onLayout={event => {
            const width = elementWidthOnGrid(
              event.nativeEvent.layout.width - 40,
              45,
              15,
            );

            setIconsPerLine(width[0]);
            setIconWidth(width[1]);
          }}
        >
          <IconsContainer>
            {icons.map((value, index) => (
              <IconContainer
                onPress={() => setIcon(value.name)}
                selected={value.name === icon}
                key={index}
                size={iconWidth}
                margin={!((index + 1) % iconsPerLine === 0)}
              >
                <Icon
                  size={35}
                  color={
                    value.name === icon ? colors.white : colors.tertiaryAlert
                  }
                  name={value.name}
                />
              </IconContainer>
            ))}
          </IconsContainer>
          {icons.length === 0 && <IconNotFound>Icon not found.</IconNotFound>}
        </IconsScroll>
      </Container>
    );
  },
);

export default ChooseIcon;
