import React, { useState } from 'react';
import axios from 'axios';

const CreateCardForm = ({ refreshCards }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/cards', {
        title,
        description,
        link,
      });

      if (response.status === 201) {
        refreshCards();
        setTitle('');
        setDescription('');
        setLink('');
      }
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit">Create Card</button>
    </form>
  );
};

export default CreateCardForm;
