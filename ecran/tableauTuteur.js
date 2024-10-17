import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const TeacherDashboard = () => {
  const [cours, setCours] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchTeacherCourses();
  }, []);

  const fetchTeacherCourses = async () => {
    try {
      const response = await axios.get('http://192.168.x.x:8000/api/teacher/courses/'); // Remplacer par l'IP correcte
      setCours(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des cours:', error);
      Alert.alert('Erreur', 'Impossible de récupérer les cours.');
    }
  };

  const renderCourseItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Text style={{ color: '#777' }}>{item.description}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailsCourstut', { courseId: item.id })}
        style={{ marginTop: 10 }}>
        <Text style={{ color: 'blue' }}>Voir le cours</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Mes Cours</Text>
      <FlatList
        data={cours}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCourseItem}
      />
    </View>
  );
};

export default TeacherDashboard;
 