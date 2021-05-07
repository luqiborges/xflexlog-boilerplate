import 'react-native-gesture-handler';
import React, { useEffect, useMemo } from 'react';
import { StatusBar, LogBox } from 'react-native';
import {
  setCustomText,
  setCustomView,
  setCustomScrollView,
} from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '~/routes';
import { navigationRef } from '~/services/navigation';
import { colors } from '~/styles';

const App: React.FC = () => {
  const customTextProps = useMemo(
    () => ({
      style: {
        fontFamily: 'Roboto-Regular',
        color: colors.black,
      },
    }),
    [],
  );

  const customViewProps = useMemo(
    () => ({
      style: {
        backgroundColor: colors.white,
      },
    }),
    [],
  );

  const customScrollViewProps = useMemo(
    () => ({
      style: {
        backgroundColor: colors.white,
      },
    }),
    [],
  );

  useEffect(() => {
    setCustomText(customTextProps);
    setCustomView(customViewProps);
    setCustomScrollView(customScrollViewProps);
  }, [customTextProps]);

  // LogBox.ignoreAllLogs(true);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
