import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TextInput } from 'react-native-paper';

const AppTextInput = ({ ...ottherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        underlineColor={colors.primary}
        theme={{ colors: { primary: colors.primary } }}
        {...ottherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // padding: 15,

    borderRadius: 25,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default AppTextInput;
