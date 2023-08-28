import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

//Afficher la liste des films
function MovieList({ movies }) {
return (
    <Container>
        <Row>
            {movies.map(movie => (
                <Col key={movie.id}>
                    <MovieCard movie={movie} />
                </Col>
            ))}
        </Row>
    </Container>
    );
}

export default MovieList;
