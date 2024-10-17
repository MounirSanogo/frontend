import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const DeleteScreen = () => {
  const [cours, setCours] = useState([]);

  const handleDeleteCourse = async (coursId) => {
    try {
      await axios.delete(`http://localhost:8000/teachers/cours/delete/${coursId}/`, {
        headers: { Authorization: `Token ${userToken}` },
      });
      setCours(cours.filter(cours => cours.id !== coursId));
    } catch (error) {
      console.error('Erreur lors de la suppression du cours :', error);
    }
  };

  return (
    <View>
      <FlatList
        data={cours}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Supprimer" onPress={() => handleDeleteCourse(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default DeleteScreen;
