import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import bookStyle from "./BookDetails.module.css"
export default function BookDetails(){
  const {id}=useParams();
  const [book, setBook] = useState([]);
  async function getDetails() {
    try {
      const res = await axios.get(`https://www.dbooks.org/api/book/${id}`);
      setBook(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getDetails();
    console.log(book);
  }, []);
    return(
        <>
        <div className={bookStyle.book}>
        <Card style={{ width:"700px",height: "900px" }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  style={{ height: "600px" }}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <p>Subtitle:{book.subtitle}</p>
                    <p>Authers:{book.authors}</p>
                    <p>Publisher:{book.publisher}</p>
                    <p>Description:{book.description}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
        </div>
        </>
    )
}