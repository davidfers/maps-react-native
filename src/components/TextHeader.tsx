import React from 'react';
import { Text, StyleSheet, Dimensions, TextStyle } from 'react-native';

const { width } = Dimensions.get('window');

export default function TextHeader({
  children,
  style,
}: {
  children: string;
  style?: TextStyle;
}) {
  return <Text style={[styles.header, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: width * 0.05,
    marginBottom: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
});
