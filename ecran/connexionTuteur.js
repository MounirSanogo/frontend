// screens/TeacherLoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from '../styles/style';

const Tuteur = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Vous pouvez ajouter une logique d'authentification ici
    if (email && password) {
      Alert.alert('Connexion réussie !');
      navigation.navigate('tableauTuteur'); // Redirige vers le tableau de bord des enseignants après la connexion
    }
    else {
      Alert.alert('Erreur', 'Veuillez renseignez correctement les champs');
    }
    // Simuler la connexion de l'enseignant
    Alert.alert('Succès', 'Connexion réussie en tant que tuteur !');
    navigation.navigate('TableauTuteur'); // Redirige vers le tableau de bord des enseignants après la connexion
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Connexion Tuteur</Text>
        
        <Text style={styles.label}>Adresse e-mail :</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Entrez votre adresse e-mail"
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

        <Button title="Se connecter" onPress={handleLogin} />
        <Text >Vous n'avez pas de compte ?</Text> 
        <Button title="créer-en un " onPress={()=>navigation.navigate('InscriptionTuteur')} />
      </View>
    </View>
  );
};

export default Tuteur;
