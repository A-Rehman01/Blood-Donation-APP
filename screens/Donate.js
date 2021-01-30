import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import { Button } from 'react-native-paper';
import SelectBox from 'react-native-multi-selectbox';
import AppOutlineButton from '../components/AppOutlineButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Donate = ({ navigation }) => {
  const [Bloodname, setBloodname] = useState('');
  const [Bloodtype, setBloodtype] = useState('');

  const submit = () => {
    if (!Bloodname || !Bloodtype) {
      createTwoButtonAlert();
      return;
    }
    const data = {
      Bloodname: Bloodname.item,
      Bloodtype: Bloodtype.item,
    };
    // console.log('data=====>', data);
    navigation.navigate('Donors');
  };
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Please Select Coorect Option',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  const Blood_Option = [
    { item: 'A', id: '1' },
    { item: 'O', id: '2' },
    { item: 'AB', id: '3' },
  ];
  const Blood_Type = [
    { item: '+', id: '1' },
    { item: '-', id: '2' },
  ];
  return (
    <ScrollView>
      <Screen>
        <View
          style={{
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <MaterialCommunityIcons
            name="menu"
            color="red"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />
          <Text style={styles.heding}>Select Your Blood Type</Text>

          <SafeAreaView
            style={{
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SelectBox
              label="Select Blood Name"
              options={Blood_Option}
              value={Bloodname}
              onChange={(e) => setBloodname(e)}
              hideInputFilter={false}
              arrowIconColor="red"
              labelStyle={{
                color: 'red',
              }}
              theme={{ colors: { primary: colors.primary } }}
            />
          </SafeAreaView>
          <SafeAreaView
            style={{
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SelectBox
              label="Select Blood Type "
              options={Blood_Type}
              value={Bloodtype}
              onChange={(e) => setBloodtype(e)}
              hideInputFilter={false}
              arrowIconColor="red"
              labelStyle={{
                color: 'red',
              }}
              theme={{ colors: { primary: colors.primary } }}
            />
          </SafeAreaView>

          <View style={styles.btnWrapper}>
            <AppOutlineButton title="Donate" onPress={submit} />
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  heding: {
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 80,
  },

  btnWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    width: '100%',
  },
});

export default Donate;
