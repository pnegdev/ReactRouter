import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from 'react-rating-stars-component';

//Description du film avec affiche et bande annonce
function Description({ movies }) {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id.toString() === id);

    if (!movie) {
        return <div>Film introuvable</div>;
    }

    return (
        <div className="mt-4">
        <Card className="movie-card">
            <div className="movie-card-content">
                <div className="movie-card-image">
                    <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
                </div>
                <div className="movie-card-info">
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.description}</Card.Text>
                        <Rating
                            count={5}
                            value={movie.rate}
                            size={20}
                            edit={false}
                        />
                        <div className="back-to-home">
                            <Link to="/" className="btn btn-secondary">
                            Back to Home
                            </Link>
                        </div>
                    </Card.Body>
                    <div className="movie-card-video">
                        <iframe                        
                            src={movie.trailerLink}
                            title="Trailer"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    );
}

export default Description;
