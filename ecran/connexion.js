// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';  // Importation des styles depuis un fichier séparé

const Connexion = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => { // handleSubmit : Une fonction qui est appelée lors de la soumission du formulaire.
    if (email && password) {
      Alert.alert('Connexion réussie !');
      navigation.navigate('ListeCours');
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Connexion</Text>
        
        <Text style={styles.label}>Adresse e-mail :</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Entrez votre e-mail"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Mot de passe :</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Entrez votre mot de passe"
          secureTextEntry
        />
        
        <Button title="Se connecter" onPress={handleSubmit} />
        <Text >Vous n'avez pas de compte ?</Text> 
        <Button title="créer-en un " onPress={()=>navigation.navigate('Inscription')} />

      </View>
    </View>
  );
};

export default Connexion;
