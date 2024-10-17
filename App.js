import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import du conteneur de navigation
import StackNavigator from './navigation/stack'; // Import de votre StackNavigator

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
