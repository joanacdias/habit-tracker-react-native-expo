import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import GlobalProvider from './src/context/provider';

import Login from './src/screens/login';

const App = () => {
  // TO DO: Remove this after testing
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 4000);

  return (
    <NavigationContainer>
      <GlobalProvider>
        <View style={styles.container}>
          <Login/>
        </View>
      </GlobalProvider>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
