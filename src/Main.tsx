/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontSource, useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BottomSheetMenu from './components/BottomSheetMenu/BottomSheetMenu';

export default function Main() {
  const [fontsLoaded] = useFonts({
    Montserrat:
      require('../assets/fonts/Montserrat-Regular.ttf') as FontSource,
    'Montserrat-Bold':
      require('../assets/fonts/Montserrat-Bold.ttf') as FontSource,
    'Montserrat-SemiBold':
      require('../assets/fonts/Montserrat-SemiBold.ttf') as FontSource,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <BottomSheetMenu />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
});
