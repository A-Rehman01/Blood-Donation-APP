import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { borderColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
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
    borderWidth: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppButton;
