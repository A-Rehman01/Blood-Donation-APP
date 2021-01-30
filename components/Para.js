import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const Para = ({ children }) => {
  return <Text style={styles.para}>{children}</Text>;
};

const styles = StyleSheet.create({
  para: {
    color: colors.para,
  },
});

export default Para;
