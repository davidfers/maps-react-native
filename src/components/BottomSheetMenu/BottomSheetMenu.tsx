import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

export default function BottomSheetMenu() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '22%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: '#232730' }}
      handleIndicatorStyle={styles.handleIndicator}
      style={styles.bottomSheet}
    >
      <MenuHeader />
      <MenuBody />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  handleIndicator: {
    backgroundColor: '#fff',
    width: 50,
  },
  bottomSheet: {
    paddingHorizontal: 32,
  },
});
