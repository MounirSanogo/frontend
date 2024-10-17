// screens/TeacherProfile.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/style';

const TeacherProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Profil Enseignant</Text>
      <Text>Nom : John Doe</Text>
      <Text>Email : johndoe@universite.com</Text>
      
      <Button
        title="Se déconnecter"
        onPress={() => navigation.replace('connexionTuteur')}
      />
    </View>
  );
};

export default TeacherProfile;
