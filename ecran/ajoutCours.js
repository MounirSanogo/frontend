// screens/AddCourseScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
//import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const AddCourseScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  // Fonction pour sélectionner un fichier PDF
  const selectPdfFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setPdfFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled', 'No file selected');
      } else {
        throw err;
      }
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async () => {
    if (!title || !description || !pdfFile) {
      Alert.alert('Error', 'Please fill all fields and select a PDF');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('pdf_file', {
      uri: pdfFile[0].uri,
      type: pdfFile[0].type,
      name: pdfFile[0].name,
    });

    try {
      await axios.post('https://your-backend-api-url.com/api/cours/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert('Success', 'Course added successfully');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Cours Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Cours Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Select PDF File" onPress={selectPdfFile} />
      {pdfFile && <Text>Selected: {pdfFile[0].name}</Text>}
      <Button title="Ajouter le Cours" onPress={handleSubmit} />
      <Button title="Supprimer un cours ?" onPress={()=>navigation.navigate('suppCours')} />
    </View>
  );
};

export default AddCourseScreen;
