// screens/NotificationsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/style';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Notifications</Text>
      <Text>Aucune nouvelle notification.</Text>
    </View>
  );
};

export default NotificationsScreen;
