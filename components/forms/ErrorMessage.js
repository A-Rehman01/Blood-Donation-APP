import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../config/colors';
const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <Text style={styles.error}>
      <Text
        style={{
          color: colors.primary,
          justifyContent: 'center',
        }}
      >
        {error}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  error: {
    width: '100%',
  },
});

export default ErrorMessage;
