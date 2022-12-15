import React from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  useWindowDimensions,
} from 'react-native';

export default function TextBody({
  children,
  style,
}: {
  children: string;
  style?: TextStyle;
}) {
  const { fontScale } = useWindowDimensions();

  return (
    <Text style={[styles.body, style, { fontSize: 14 * fontScale }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  body: {
    color: '#fff',
    fontFamily: 'Montserrat',
    letterSpacing: 0.5,
    textAlign: 'justify',
  },
});
