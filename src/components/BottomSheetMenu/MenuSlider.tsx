import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';
import TextBody from '../TextBody';
import throttle from 'lodash/throttle';

export default function MenuSlider() {
  console.log('rendering MenuSlider.tsx', new Date().getTime());
  const [distance, setDistance] = useState(10);
  const progress = useSharedValue(10);
  const min = useSharedValue(0);
  const max = useSharedValue(30);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleSetDistance = useCallback(
    throttle((value: number) => {
      console.log('throttled', Date.now());
      setDistance(+value.toFixed(1));
    }, 200),
    [],
  );
  return (
    <View style={styles.container}>
      <TextBody style={{ marginTop: 15 }}>
        {`Distáncia desde mi posición (${distance}km)`}
      </TextBody>
      <Slider
        style={styles.slider}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        renderBubble={() => null}
        onValueChange={throttleSetDistance}
        theme={{
          disableMinTrackTintColor: '#fff',
          maximumTrackTintColor: '#fff',
          minimumTrackTintColor: '#689F63',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  slider: {
    width: '100%',
    paddingVertical: 30,
    height: 40,
  },
});
