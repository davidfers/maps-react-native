import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Main from './src/Main';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      <Main />
    </GestureHandlerRootView>
  );
};

export default App;
