import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
export default function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  async function getApi() {
    try {
      const res = await axios.get("https://www.dbooks.org/api/recent");
      setBooks(res.data.books);
    } catch (err) {
      console.log(err);
    }
  }
  const go = (id) => {
    navigate(`/bookDetails/${id}`);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div style={{ padding: "80px" }}>
        <Row xs={1} md={4} className="g-4">
          {books.map((book) => (
            <Col key={book.id}>
              <Card style={{ height: "900px" }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  style={{ height: "600px" }}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.subtitle}
                    <br />
                    <br />
                    Authers:{book.authors}
                  </Card.Text>
                </Card.Body>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    go(book.id);
                  }}
                >
                  Details
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
