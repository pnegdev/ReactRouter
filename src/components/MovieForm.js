import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Rating from 'react-rating-stars-component';

//Ajout d'un nouveau film
function MovieForm({ onAddMovie }) {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        trailerLink: '',
        rate: 0,
    });

    const [formError, setFormError] = useState('');

    const handleAddMovie = () => {
        if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.trailerLink && newMovie.rate) {
        onAddMovie(newMovie);
        setNewMovie({
            title: '',
            description: '',
            posterURL: '',
            trailerLink: '',
            rate: 0,
        });
        setFormError('');
        } else {
        setFormError('Merci de remplir tous les champs.');
        }
    };

    return (
        <div className="movie-form">
        <h2>Nouveau film</h2>
        {formError && <p className="error">{formError}</p>}
        <Form>
            <Form.Group controlId="title">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                    type="text"
                    value={newMovie.title}
                    onChange={event => setNewMovie({ ...newMovie, title: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    value={newMovie.description}
                    onChange={event => setNewMovie({ ...newMovie, description: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="posterURL">
                <Form.Label>URL Affiche</Form.Label>
                <Form.Control
                    type="text"
                    value={newMovie.posterURL}
                    onChange={event => setNewMovie({ ...newMovie, posterURL: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="trailerLink">
                <Form.Label>URL Video</Form.Label>
                <Form.Control
                    type="text"
                    value={newMovie.trailerLink}
                    onChange={event => setNewMovie({ ...newMovie, trailerLink: event.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="rate">
                <Form.Label>Note</Form.Label>
                <Rating
                    count={5}
                    value={newMovie.rate}
                    onChange={newRate => setNewMovie({ ...newMovie, rate: newRate })}
                    size={24}
                />
            </Form.Group>
            <Button onClick={handleAddMovie} variant="primary" className="mt-3">Ajouter un film</Button>
        </Form>
        </div>
    );
}

export default MovieForm;
