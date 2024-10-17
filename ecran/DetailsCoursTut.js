import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CourseDetails = ({ route }) => {
  const { coursId } = route.params; // ID du cours à partir de la navigation
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  // Récupérer les messages du cours
  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/cours/cours/<int:cours_id>/messages/`); // Remplacer par ton IP
      setMessages(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des messages:', error);
      Alert.alert('Erreur', 'Impossible de récupérer les messages.');
    }
  };

  // Envoyer un nouveau message
  const sendMessage = async () => {
    if (!newMessage.trim()) {
      Alert.alert('Erreur', 'Le message ne peut pas être vide.');
      return;
    }
    
    try {
      await axios.post(`http://127.0.0.1:8000/api/cours/cours/<int:cours_id>/messages/new/`, { content: newMessage });
      setNewMessage(''); // Efface le champ
      fetchMessages();   // Actualise la liste des messages après l'envoi
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      Alert.alert('Erreur', 'Impossible d\'envoyer le message.');
    }
  };

  const renderMessageItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>{item.sender.first_name} {item.sender.last_name}</Text>
      <Text>{item.content}</Text>
      <Text style={{ fontSize: 12, color: '#777' }}>{new Date(item.timestamp).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Messages du Cours</Text>
      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessageItem}
        style={{ marginBottom: 20 }}
      />
      
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Écrire un message..."
        value={newMessage}
        onChangeText={setNewMessage}
      />

      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
};

export default CourseDetails;
