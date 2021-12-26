import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}