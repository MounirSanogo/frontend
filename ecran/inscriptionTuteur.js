// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';  // Importation des styles depuis un fichier séparé
import axios from 'axios';

const InscriptionTuteur = ({ navigation }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignUp = async () => {
      if (password !== confirmPassword) {
        Alert.alert('Erreur', 'Les mots de passe ne correspondent pas.');
        return;
      }
      if (nom && prenom && email && password && confirmPassword) {
        try {
          // Envoyer les informations d'inscription au backend via axios
          const response = await axios.post('http://127.0.0.1:8000/api/Tuteurinscrip/', {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
          });
  
          // Si la requête est un succès, rediriger vers la page de connexion
          if (response.status === 201) {
            Alert.alert('Succès', 'Compte tuteur créé avec succès !');
            navigation.navigate('connexionTuteur');  // Redirige vers la page de connexion
          }
        } catch (error) {
          console.error('Erreur lors de l\'inscription :', error);
          Alert.alert('Erreur', 'Impossible de créer le compte.');
        }
      } else {
        Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Inscription</Text>

        <Text style={styles.label}>Nom :</Text>
        <TextInput
          style={styles.input}
          value={nom}
          onChangeText={setNom}
          keyboardType="Name"
          placeholder="Votre nom"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Prénom :</Text>
        <TextInput
          style={styles.input}
          value={prenom}
          onChangeText={setPrenom}
          keyboardType="Name"
          placeholder="Votre prénom"
          autoCapitalize="none"
        />
        
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

        <Text style={styles.label}>Confirmer mot de passe :</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmez votre mot de passe"
          secureTextEntry
        />

        
        <Button title="S'inscrire'" onPress={handleSignUp} />

      </View>
    </View>
  );
};

export default InscriptionTuteur;
