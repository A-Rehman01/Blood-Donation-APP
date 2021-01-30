import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import colors from '../config/colors';
import { Divider } from 'react-native-paper';

const ListItem = ({ title, subtitle, image, IconComponent, onPress }) => {
  return (
    <View style={{ padding: 10 }}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detailContainer}>
            {subtitle && (
              <View style={styles.subtitleContainer}>
                <Fontisto name="blood-drop" color={colors.primary} size={20} />
                <Text style={styles.subtitle}>{subtitle}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableHighlight>
      <View style={{ width: '100%' }}>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',
    marginLeft: 10,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 16,
    marginLeft: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});

export default ListItem;
