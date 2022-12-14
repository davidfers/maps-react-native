import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  ViewStyle,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { iconName } from './types';

export default function MenuButton({
  style: buttonStyle,
  text,
  icon,
}: {
  style?: ViewStyle;
  text: string;
  icon?: iconName;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => setIsActive((isActive) => !isActive)}
    >
      <View
        style={[
          styles.button,
          buttonStyle && buttonStyle,
          isActive && styles.buttonActive,
        ]}
      >
        <View style={styles.buttonContent}>
          {icon && (
            <Ionicons
              name={icon}
              size={18}
              color={isActive ? '#689F63' : '#fff'}
              style={{ marginRight: 10 }}
            />
          )}

          <Text
            style={[
              styles.buttonText,
              isActive && styles.buttonTextActive,
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 5,
  },
  buttonActive: {
    borderColor: '#689F63',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
  buttonTextActive: {
    color: '#689F63',
  },
});
