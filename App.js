/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
