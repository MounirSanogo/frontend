import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';  // Importation d'Axios
import { styles } from '../styles/style';  // Importation des styles depuis un fichier séparé

const Inscription = ({ navigation }) => {
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => { // Fonction asynchrone pour gérer l'inscription
        // Validation des champs
        if (password !== confirmPassword) {
            Alert.alert('Erreur', 'Les mots de passe ne correspondent pas.');
            return;
        }

        if (Nom && Prenom && email && password && confirmPassword) {
            try {
                // Envoyer les données via Axios
                const response = await axios.post('http://127.0.0.1:8000/api/etudiants/Etudiantinscrip/', { //l'URL de l'API
                    nom: Nom,
                    prenom: Prenom,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                });

                // Si la requête réussit, afficher un message de succès
                Alert.alert('Succès', 'Compte créé avec succès !');
                navigation.navigate('Login');  // Redirige vers la page de connexion après l'inscription
            } catch (error) {
                // Gestion des erreurs
                console.error('Erreur lors de l\'inscription:', error);
                Alert.alert('Erreur', 'Une erreur est survenue lors de la création du compte.');
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
                    value={Nom}
                    onChangeText={setNom}
                    keyboardType="default"
                    placeholder="Votre nom"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Prénom :</Text>
                <TextInput
                    style={styles.input}
                    value={Prenom}
                    onChangeText={setPrenom}
                    keyboardType="default"
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

                <Button title="S'inscrire" onPress={handleSignUp} />
            </View>
        </View>
    );
};

export default Inscription;
