import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileForm = ({ userType }) => {
  const [profile, setProfile] = useState({
    bio: '',
    avatar: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = userType === 'etudiant' ? '/api/etudiants/profile/' : '/api/tuteurs/profile/';

  // Récupérer les informations actuelles du profil
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setProfile({
          bio: response.data.bio,
          avatar: response.data.avatar,
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error.response ? error.response.data : 'Erreur de chargement');
        setLoading(false);
      });
  }, [apiUrl]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfile({
      ...profile,
      avatar: e.target.files[0], 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bio', profile.bio);
    if (profile.avatar) {
      formData.append('avatar', profile.avatar);
    }

    axios.put(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        alert('Profil mis à jour avec succès');
      })
      .catch(error => {
        setError(error.response ? error.response.data : 'Erreur lors de la mise à jour');
      });
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Bio:</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Avatar:</label>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <button type="submit">Mettre à jour le profil</button>
    </form>
  );
};

export default ProfileForm;
