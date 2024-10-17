import React, { useState, useEffect } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import axios from 'axios';
//import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoursDetail = ({ route }) => {
    const { coursId } = route.params;
    const [cours, setCours] = useState(null);

    useEffect(() => {
        // Récupérer le cours spécifique depuis l'API
        axios.get(`http://backend-api-url/cours/${coursId}/`)
            .then(response => {
                setCours(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [coursId]);

    if (!cours) {
        return <Text>Chargement...</Text>;
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22 }}>{cours.title}</Text>
            <Text style={{ marginVertical: 20 }}>{cours.description}</Text>

            <Button
                title="Télécharger le PDF"
                onPress={() => Linking.openURL(cours.pdf_file)}  // Ouvrir le lien du PDF
            />
            <Button 
                title="Voir le chat" 
                onPress={() => navigation.navigate('Chat', { coursId })} 
            />
        </View>
    );
};

export default CoursDetail;
