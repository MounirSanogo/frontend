// screens/StudentDetails.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/style';

const Garde = ({ navigation }) => {

  return (
    <View style={styles.container}>
      
      
      <Button title="TUTEUR ? " onPress={()=>navigation.navigate('connexionTuteur')} />
      <Text>OU</Text>
      <Button title="ETUDIANT ? " onPress={()=>navigation.navigate('connexion1')} />
    </View>
  );
};

export default Garde;
