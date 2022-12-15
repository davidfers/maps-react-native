import React, { useRef, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import { ScrollView } from 'react-native-gesture-handler';

export default function BottomSheetMenu() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['5%', '22%', '75%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: '#232730' }}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <ScrollView
        showsVerticalScrollIndicator={true}
        indicatorStyle="white"
        contentContainerStyle={styles.scrollViewContent}
      >
        <MenuHeader />
        <MenuBody />
      </ScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  handleIndicator: {
    backgroundColor: '#fff',
    width: 60,
  },

  scrollViewContent: {
    paddingVertical: 15,
    paddingHorizontal: 32,
  },
});
