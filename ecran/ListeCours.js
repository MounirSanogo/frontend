import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentDashboard = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/student/courses/', {
          headers: { Authorization: `Token ${userToken}` },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours :', error);
      }
    };

    fetchCourses();
  }, []);

  const renderCourse = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', { courseId: item.id })}>
      <View style={styles.courseContainer}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
        <Text style={styles.teacherName}>Enseignant : {item.teacher}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#555',
  },
  teacherName: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});

export default StudentDashboard;
