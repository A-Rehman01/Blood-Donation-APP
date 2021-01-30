import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ title, onPress, bgColor = 'primary', textColor = 'white' }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: colors[bgColor] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppButton;
