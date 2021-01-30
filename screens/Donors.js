import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

const donors = [
  {
    id: '1',
    title: 'Abdul Sammad',
    subtitle: 'O+',
    image: require('../assets/AbdulSammad.jpeg'),
  },
  {
    id: '2',
    title: 'Abdul Rehman',
    subtitle: 'A-',
    image: require('../assets/AbdulRehman.jpeg'),
  },
  {
    id: '3',
    title: 'Addel Ahsan',
    subtitle: 'O-',
    image: require('../assets/person.png'),
  },
  {
    id: '4',
    title: 'Talha Butto',
    subtitle: 'A+',
    image: require('../assets/person.png'),
  },
];

const Donors = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="menu"
          color="red"
          size={25}
          onPress={() => navigation.openDrawer()}
        />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignIn')}>
          <View style={styles.logout}>
            <MaterialCommunityIcons
              name="logout"
              size={15}
              color={colors.primary}
            />
            <Text style={{ color: colors.primary }}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={donors}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={() => console.log(item.id)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 0,
    backgroundColor: colors.light,
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  logout: {
    flexDirection: 'row',
    // backgroundColor: colors.primary,
    width: 80,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Donors;
