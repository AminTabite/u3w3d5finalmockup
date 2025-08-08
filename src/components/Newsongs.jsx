import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const Newsongs = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);

  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=three-days-grace";

  const Getsongs = () => {
    fetch(endpoint)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("caricamento canzoni fallito");
        }
      })
      .then((data) => {
        console.log(data, "ecco le canzoni");
        setSongs(data.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err, "operazione fallita, refresha la pagina");
        setError(true);
      });
  };

  useEffect(() => {
    Getsongs();
  }, []);

  return (
    <Container>
      {error && (
        <p className="text-danger">
          Errore nel caricamento delle canzoni, ricarica la pagina.
        </p>
      )}

      <Row>
        {songs.slice(0, 12).map((song) => (
          <Col key={song.id} xs={4} lg={2}>
            <Card>
              <Card.Img variant="top" src={song.artist.picture_medium} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Newsongs;
