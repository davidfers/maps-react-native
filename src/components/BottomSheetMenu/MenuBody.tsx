import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuButton from './MenuButton';
import TextBody from '../TextBody';
import TextHeader from '../TextHeader';
import MenuSlider from './MenuSlider';

export default function MenuBody() {
  console.log('rendering MenuBody.tsx', new Date().getTime());
  return (
    <View style={styles.container}>
      <TextHeader style={styles.bodyTitle}>Destacados</TextHeader>
      <TextBody style={styles.bodyDescription}>
        Selecciona algunos de los marcadores por defecto que hemos
        seleccionado para ti
      </TextBody>
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
      <MenuSlider />
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
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  bodyDescription: {
    marginBottom: 30,
  },

  button: {
    marginBottom: 15,
  },
});
