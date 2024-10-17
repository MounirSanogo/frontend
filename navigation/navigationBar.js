// navigation/DashboardTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListeCours from '../ecran/ListeCours';
import Profil from '../ecran/ProfileForm';
import notifications from '../ecran/notificationEtu'; // L'écran de notifications
//import DeconnexionTuteur from '../ecran/deconnexionTuteur'; // L'écran de déconnexion
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DashboardTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Modules') {
            iconName = 'book-outline';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
          } else if(route.name === 'Profile') {
            iconName = 'person-outline';
          }
          //} else if (route.name === 'Logout') {
            //iconName = 'log-out-outline';
          
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
      })}
    >
      <Tab.Screen name="ListeCours" component={ListeCours} options={{ title: 'ListeCours' }} />
      <Tab.Screen name="Notifications" component={notifications} options={{ title: 'Notifications' }} />
      <Tab.Screen name="Profil" component={Profil} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
};

export default DashboardTabNavigator;
