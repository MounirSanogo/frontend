import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';

const Chat = ({ route }) => {
    const { coursId } = route.params; // On récupère l'id du cours passé en paramètre
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    
    useEffect(() => {
        // Récupérer les messages du cours
        axios.get(`http://backend-api/cours/${coursId}/messages/`)
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [coursId]);

    const sendMessage = () => {
        if (newMessage.trim() === '') return;
        
        axios.post(`http://backend-api/cours/${coursId}/messages/new/`, {
            content: newMessage,
            sender: 1 // Remplace par l'id de l'utilisateur connecté
        })
        .then(response => {
            setMessages([...messages, response.data]); // Ajouter le nouveau message à la liste
            setNewMessage(''); // Effacer le champ de texte
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Liste des messages */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.sender}: {item.content}</Text>
                        <Text>{item.timestamp}</Text>
                    </View>
                )}
            />
            
            {/* Formulaire pour envoyer un message */}
            <TextInput
                placeholder="Écrire un message..."
                value={newMessage}
                onChangeText={setNewMessage}
                style={{ borderWidth: 1, marginBottom: 10 }}
            />
            <Button title="Envoyer" onPress={sendMessage} />
        </View>
    );
};

export default Chat;
