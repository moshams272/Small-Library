import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLoaderData, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../AxiosConfig/AxiosConfig";
import { useSelector } from "react-redux";
import Loader from "../../component/Loader";
export default function Books() {
  const load = useSelector((state) => state.loader.loader);
  const books = useLoaderData();
  const navigate = useNavigate();
  const go = (id) => {
    navigate(`/bookDetails/${id}`);
  };
  return (
    <>
      {load ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
export const loader = async () => {
  const res = await axiosInstance.get("/recent");
  return res.data.books;
};
