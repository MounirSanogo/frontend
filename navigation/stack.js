// navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../ecran/Accueil';
import Connexion from '../ecran/connexion';
import Inscription from '../ecran/inscription';
import connexionTuteur from '../ecran/connexionTuteur';
import InscriptionTuteur from '../ecran/inscriptionTuteur';
import ListeCours from '../ecran/ListeCours';
import tableauTuteur from '../ecran/tableauTuteur'
import DetailCoursEtu from '../ecran/DetailCoursEtu';
import ProfileForm from '../ecran/ProfileForm'
//import CourseListScreen from './CourseListScreen';  // Écran de la liste des cours
//import Chat from './Chat';  // Écran de messagerie
import BarNavigation from './barNavigation';
import NavigationBar from './navigationBar';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Accueil} options={{ title: 'Accueil' }} />
      <Stack.Screen name="connexion1" component={Connexion} options={{ title: 'Connexion1' }} />
      <Stack.Screen name="Inscription" component={Inscription} options={{ title: 'Inscription' }} />
      <Stack.Screen name="InscriptionTuteur" component={InscriptionTuteur} options={{ title: 'InscriptionTuteur' }} />
      <Stack.Screen name="ListeCours" component={ListeCours} options={{ title: 'ListeCours'}}/>
      <Stack.Screen name="DetailCoursEtu" component={DetailCoursEtu} options={{ title: 'DetailCoursEtu'}}/>
      <Stack.Screen name="connexionTuteur" component={connexionTuteur} options={{ title: 'connexionTuteur' }} />
      <Stack.Screen name="tableauTuteur" component={tableauTuteur} options={{ title: 'tableauTuteur' }}/>
      
      <Stack.Screen 
          name="EtudiantProfile" 
          children={() => <ProfileForm userType="etudiant" />} 
          options={{ title: 'Profil Étudiant' }} 
        />

        {/* Écran pour le profil des enseignants */}
        <Stack.Screen 
          name="TuteurProfile" 
          children={() => <ProfileForm userType="tuteur" />} 
          options={{ title: 'Profil Enseignant' }} 
        />
        {/* tableau de bord de l'enseignant*/}
      <Stack.Screen
          name="TableauTuteur"
          component={BarNavigation} // Utilisez la navigation personnalisée
          options={{ title: 'Tableau de bord Enseignant', headerShown: false }} // Cacher l'en-tête
        />
        {/* tableau de bord de l'étudiant*/}
      <Stack.Screen
          name="Modules"
          component={NavigationBar} // Utilisez la navigation personnalisée
          options={{ title: 'Les modules', headerShown: false }} // Cacher l'en-tête
        />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
