import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/screen/Home';

const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const AppRoutes: React.FC = () => {
  return <StackScreens />;
};

export default AppRoutes;
