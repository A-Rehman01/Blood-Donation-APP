import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppOutlineButton from '../components/AppOutlineButton';
import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.round}></View>
      <View>
        <Image style={styles.logo} source={require('../assets/logo-white.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <AppOutlineButton
          title='Sign In'
          textColor='primary'
          onPress={() => navigation.navigate('SignIn')}
        />
        <AppOutlineButton
          title='Create Account'
          color='primary'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
   marginBottom: 200,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  round: {
    width: '100%',
    height: 600,
    backgroundColor: colors.primary,
    borderRadius: 100,
    position: 'absolute',
    top: -80,
  },
});

export default WelcomeScreen;
