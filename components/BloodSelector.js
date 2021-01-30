import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';

const BloodSelector = ({ active, text, small, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(text)}>
      <View
        style={[
          styles.container,
          small && { height: 50, width: 50 },
          active && { backgroundColor: colors.primary },
        ]}
      >
        <Text style={[styles.text, active && { color: colors.white }]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: '42%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 8,
    height: 70,
  },
  text: {
    fontSize: 18,
    color: colors.black,
  },
});

export default BloodSelector;
