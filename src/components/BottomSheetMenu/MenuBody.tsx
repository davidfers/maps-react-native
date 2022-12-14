import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import MenuButton from './MenuButton';

export default function MenuHeader() {
  const [distance, setDistance] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.bodyTitle}>Destacados</Text>
      <Text style={styles.bodyDescription}>
        Selecciona algunos de los marcadores por defecto que hemos
        seleccionado para ti
      </Text>
      <MenuButton
        key={1}
        style={styles.button}
        text="Restaurantes"
        icon="restaurant-outline"
      />
      <MenuButton
        key={2}
        style={styles.button}
        text="Parques y sitios al aire libre"
        icon="flower-outline"
      />
      <MenuButton
        key={3}
        style={styles.button}
        text="Bares"
        icon="wine-outline"
      />
      <Text style={styles.bodyDescription}>
        {`Distáncia desde mi posición (${distance}km)`}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={30}
        step={0}
        value={distance}
        onValueChange={(value) => setDistance(+value.toFixed(1))}
        minimumTrackTintColor="#689F63"
        maximumTrackTintColor="#FFF"
        thumbTintColor="#689F63"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    borderTopColor: '#fff',
    borderTopWidth: 2,
  },
  bodyTitle: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
  },
  bodyDescription: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat',
    letterSpacing: 0.5,
    textAlign: 'justify',
    marginBottom: 30,
  },

  button: {
    marginBottom: 15,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
