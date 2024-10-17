import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableauTuteur from '../ecran/tableauTuteur';
import Cours from '../ecran/ajoutCours';
import ProfileForm from '../ecran/ProfileForm';
import Notification from '../ecran/notificationTut'; // L'écran de notifications
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DashboardTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tableau de bord') {
            iconName = 'home-outline';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Cours') {
            iconName = 'book-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
      })}
    >
      <Tab.Screen name="Tableau" component={TableauTuteur} options={{ title: 'Tableau de bord' }} />
      <Tab.Screen name="Cours" component={Cours} options={{ title: 'Cours' }} />
      
      <Tab.Screen name="Profile" component={ProfileForm} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
};

export default DashboardTabNavigator;
