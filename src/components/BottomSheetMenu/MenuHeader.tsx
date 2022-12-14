import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>FIND YOUR PLACE</Text>
      <Text style={styles.headerDescription}>
        Findyourplace, te permite buscar de forma rápida restaurantes,
        parques y bares para que puedas descansar o trabjar fuera de casa.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    padding: 8,
    marginBottom: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  headerDescription: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat',
    letterSpacing: 0.5,
    textAlign: 'justify',
  },
});
