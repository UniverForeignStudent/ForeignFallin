import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Settings from './Settings';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
  );
  };
  
  export default StackNavigation;