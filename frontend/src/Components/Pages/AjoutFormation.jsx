import React, { useState } from 'react';
import axios from 'axios';

const AjoutFormation = () => {
    const [titreInput, setTitreInput] = useState("");
    const [imageInput, setImageInput] = useState("");
    const [debutInput, setDebutInput] = useState("");
    const [finInput, setFinInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titre', titreInput);
        formData.append('file', imageInput);
        formData.append('debut', debutInput);
        formData.append('fin', finInput);
        formData.append('description', descriptionInput);

        try {
            const response = await axios.post("http://localhost:5000/addFormation/register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <div>
            <h1>Ajouter une formation</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titre">Titre de la formation:</label>
                <input type="text" id='titre' required value={titreInput} onChange={(e) => setTitreInput(e.target.value)} />
                <br />

                <label htmlFor="file">Ajoutez une image:</label>
                <input type="file" name='file' id='file' required onChange={(e) => setImageInput(e.target.files[0])} />
                <br />

                <label htmlFor="debut">Date et heure du début de la formation:</label>
                <input type="datetime-local" id='debut' required value={debutInput} onChange={(e) => setDebutInput(e.target.value)} />
                <br />

                <label htmlFor="fin">Fin de la formation:</label>
                <input type="date" id='date' required value={finInput} onChange={(e) => setFinInput(e.target.value)} />
                <br />

                <textarea name="description" id="" cols="30" rows="10" placeholder='Description' required value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)}></textarea>
                <br />
                <button type='submit'>S'inscrire</button>
            </form>
        </div>
    );
};

export default AjoutFormation;
