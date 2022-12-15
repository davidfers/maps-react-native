import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextBody from '../TextBody';
import TextHeader from '../TextHeader';

export default function MenuHeader() {
  return (
    <View style={styles.container}>
      <TextHeader style={styles.headerTitle}>FIND YOUR PLACE</TextHeader>
      <TextBody>
        Findyourplace, te permite buscar de forma rápida restaurantes,
        parques y bares para que puedas descansar o trabjar fuera de casa.
      </TextBody>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    marginBottom: 20,
  },
});
