import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function Home({onLoadMovies, titleFilter, rateFilter}) {
  const [movies, setMovies] = useState([
// Liste initiale des films
    { id: 1, title: 'Blue Beetle', description: "Fraîchement diplômé de l’université, Jaime Reyes rentre chez lui, plein d’ambitions, mais il découvre que la situation a bien changé depuis son départ. Tandis qu’il cherche sa place dans le monde, le destin s’en mêle", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/08/11/15/51/5392555.jpg', trailerLink: 'https://www.youtube.com/embed/-OOAZLZeZBc',  rate: '3' },
    { id: 2, title: 'Barbie', description: "A Barbie Land, vous êtes un être parfait dans un monde parfait. Sauf si vous êtes en crise existentielle, ou si vous êtes Ken.", posterURL: 'https://fr.web.img2.acsta.net/c_310_420/pictures/23/06/16/12/04/4590179.jpg', trailerLink:'https://www.youtube.com/embed/2oOzWcbVf1c', rate: '4' },
    { id: 3, title: 'Oppenheimer', description: "En 1942, convaincus que l’Allemagne nazie est en train de développer une arme nucléaire, les États-Unis initient, dans le plus grand secret, le 'Projet Manhattan' destiné à mettre au point la première bombe atomique de l’histoire.", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/26/16/52/2793170.jpg', trailerLink:'https://www.youtube.com/embed/CoXtvSRpHgM', rate: '5' },
    { id: 4, title: 'Ninja Turtles', description: "Après des années passées loin du monde des humains, les frères Tortues entreprennent de gagner le cœur des New-Yorkais et d'être acceptés comme des adolescents normaux grâce à des actes héroïques.", posterURL: 'https://fr.web.img2.acsta.net/c_310_420/pictures/23/06/28/10/49/2274361.jpg', trailerLink:'https://www.youtube.com/embed/M2PIjWZyCEc', rate: '4' },
    { id: 5, title: 'En eaux troubles', description: "Cet été, préparez-vous à une décharge d’adrénaline avec EN EAUX TRÈS TROUBLES ! Film d’action survolté, ce deuxième opus plus gigantesque encore que le blockbuster de 2018 plonge le spectateur dans des eaux toujours plus profondes, où grouillent de redoutables megalodons, et bien plus", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/06/13/10/45/4427962.jpg', trailerLink:'https://www.youtube.com/embed/UjuhBMleltQ', rate: '3' },
    { id: 6, title: 'Le manoir hanté', description: "Inspiré de l’attraction mythique des parcs Disneyland, Le manoir hanté raconte l’histoire d’une mère et son fils qui engagent une équipe de pseudo-experts pour les aider à chasser les différents spectres et fantômes qui hantent leur maison.", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/17/14/45/5710121.jpg', trailerLink:'https://www.youtube.com/embed/kqmS6hnThcc', rate: '4' },
    { id: 7, title: 'Mission Impossible', description: "Dans Mission: Impossible Dead Reckoning Partie 1, Ethan Hunt et son équipe de l’IMF se lancent dans leur mission la plus périlleuse à ce jour : traquer une effroyable nouvelle arme avant que celle-ci ne tombe entre de mauvaises mains et menace l’humanité entière.", posterURL: 'https://fr.web.img4.acsta.net/c_310_420/pictures/23/06/16/09/11/1574235.jpg', trailerLink:'https://www.youtube.com/embed/AzRdtaXA3VM', rate: '5' },
    { id: 8, title: 'Indiana Jones', description: "1969. Après avoir passé plus de dix ans à enseigner au Hunter College de New York, l'estimé docteur Jones, professeur d'archéologie, est sur le point de prendre sa retraite et de couler des jours paisibles.", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/06/07/14/33/5787419.jpg', trailerLink:'https://www.youtube.com/embed/Ov3UMve-zv8', rate: '4' },
    { id: 9, title: 'Elémentaire', description: "Dans la ville d’Element City, le feu, l’eau, la terre et l’air vivent dans la plus parfaite harmonie. C’est ici que résident Flam, une jeune femme intrépide et vive d’esprit, au caractère bien trempé, et Flack, un garçon sentimental et amusant, plutôt suiveur dans l’âme.", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/06/07/14/09/5709179.jpg', trailerLink:'https://www.youtube.com/embed/E0V9J6r3zKc', rate: '4' },
    { id: 10, title: 'Spider-Man', description: "Après avoir retrouvé Gwen Stacy, Spider-Man, le sympathique héros originaire de Brooklyn, est catapulté à travers le Multivers, où il rencontre une équipe de Spider-Héros chargée d'en protéger l'existence.", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/05/11/10/00/1986933.jpg', trailerLink:'https://www.youtube.com/embed/jhHF9WwhPGw', rate: '5' },
    { id: 11, title: 'Le Challenge', description: "Maddie est sur le point de perdre sa maison d’enfance et elle pense avoir trouvé la solution à ses problèmes financiers lorsqu’elle tombe sur une offre d’emploi intrigante : parents fortunés cherchent quelqu’un pour emmener Percy, leur fils introverti de 19 ans, dans une série de « dates » afin de le décoincer avant qu’il ne parte pour l’université.", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/04/12/49/2864731.jpg', trailerLink:'https://www.youtube.com/embed/dbW_Pu_I3Xo', rate: '3' },
    { id: 12, title: 'Transformers', description: "Transformers : Rise of the Beasts renoue avec l'action et le grand spectacle qui ont séduit des millions de spectateurs à travers le monde. Ce nouveau volet se déroule au cœur des années 90 et nous emmène aux quatre coins du globe.", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/04/27/15/59/2127095.jpg', trailerLink:'https://www.youtube.com/embed/kifKqR3LX_U', rate: '4' },
    { id: 13, title: 'La petite sirène', description: "Les années 1830, dans les eaux d'une île fictive des Caraïbes. Ariel, la benjamine des filles du roi Triton, est une jeune sirène belle et fougueuse dotée d’un tempérament d’aventurière. Rebelle dans l’âme, elle n’a de cesse d’être attirée par le monde qui existe par-delà les flots", posterURL: 'https://fr.web.img5.acsta.net/c_310_420/pictures/23/03/13/10/44/5295339.jpg', trailerLink:'https://www.youtube.com/embed/_XlStDOmubY', rate: '3' },
    { id: 14, title: 'The Flash', description: "Les réalités s’affrontent dans The Flash lorsque Barry se sert de ses super-pouvoirs pour remonter le temps et modifier son passé. Mais ses efforts pour sauver sa famille ne sont pas sans conséquences sur l’avenir, et Barry se retrouve pris au piège d’une réalité où le général Zod est de retour, menaçant d’anéantir la planète, et où les super-héros ont disparu.", posterURL: 'https://fr.web.img5.acsta.net/c_310_420/pictures/23/04/26/10/33/4339332.jpg', trailerLink:'https://www.youtube.com/embed/rCFRY9-Kpw4', rate: '3' },
    { id: 15, title: 'Fast & Furious', description: "Après bien des missions et contre toute attente, Dom Toretto et sa famille ont su déjouer, devancer, surpasser et distancer tous les adversaires qui ont croisé leur route. Ils sont aujourd’hui face à leur ennemi le plus terrifiant et le plus intime", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/10/10/55/5129031.jpg', trailerLink:'https://www.youtube.com/embed/fAfs4JkeN78', rate: '4' },
    { id: 16, title: 'Super Mario Bros', description: "Alors qu’ils tentent de réparer une canalisation souterraine, Mario et son frère Luigi, tous deux plombiers, se retrouvent plongés dans un nouvel univers féerique à travers un mystérieux conduit. Mais lorsque les deux frères sont séparés, Mario s’engage dans une aventure trépidante pour retrouver Luigi.", posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/03/20/14/57/4979368.jpg', trailerLink:'https://www.youtube.com/embed/0yh_LxtsdD0', rate: '5' },
    { id: 17, title: 'Hypnotic', description: "Déterminé à retrouver sa fille, le détective Danny Rourke enquête sur une série de braquages qui pourraient être liés à sa disparition. Mais les criminels qu’il poursuit sont bien plus machiavéliques qu’il ne l’imaginait", posterURL: 'https://fr.web.img4.acsta.net/c_310_420/pictures/23/06/20/12/05/2286524.jpg', trailerLink:'https://www.youtube.com/embed/lN3AookUgxc', rate: '3' },
    { id: 18, title: 'Donjons & Dragons', description: "Un voleur beau gosse et une bande d'aventuriers improbables entreprennent un casse épique pour récupérer une relique perdue. Les choses tournent mal lorsqu'ils s'attirent les foudres des mauvaises personnes.", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/22/12/08/16/05/4954612.jpg', trailerLink:'https://www.youtube.com/embed/wK69QJ2ESO0', rate: '4' },
    { id: 19, title: 'Love Again', description: "Et si un simple texto vous menait vers l'amour de votre vie ? Mira Ray essaie de surmonter le décès de son fiancé, et envoie une série de messages romantiques à son numéro de téléphone", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/04/14/13/50/3006482.jpg', trailerLink:'https://www.youtube.com/embed/tI6YtCZwWA4', rate: '3' },
    { id: 20, title: 'Titanic', description: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le Titanic appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.", posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/10/16/06/0622119.jpg', trailerLink:'https://www.youtube.com/embed/Quf4qIkD3KY', rate: '5' },
  ]);

  useEffect(() => {
    onLoadMovies(movies);
  }, [onLoadMovies, movies]);

  const [filteredMovies, setFilteredMovies] = useState([]);

//Afficher et cacher le formulaire d'ajout de films
  const [showAddForm, setShowAddForm] = useState(false);
  const addMovie = newMovie => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
    setShowAddForm(false);
  };

//Filtre à partir du titre et de la note
useEffect(() => {
  const updatedMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const rateMatch = movie.rate === rateFilter || rateFilter === '';
    return titleMatch && rateMatch;
  });

  setFilteredMovies(updatedMovies);
}, [movies, titleFilter, rateFilter]);

return (
  <div className="App bg-light mb-5">
    <Container>
      <div className="mt-3">
        <h1>Films</h1>
        <Button onClick={() => setShowAddForm(!showAddForm)} variant={showAddForm ? 'danger' : 'primary'}>
            {showAddForm ? 'Annuler'  : 'Ajouter un film'}
        </Button>
      </div>
      {showAddForm && <MovieForm onAddMovie={addMovie} />}
      <MovieList movies={filteredMovies} onAddMovie={addMovie} />
    </Container>
  </div>
);
}

export default Home;
