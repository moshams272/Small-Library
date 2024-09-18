import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import bookStyle from "./BookDetails.module.css"
import { axiosInstance } from "../../AxiosConfig/AxiosConfig";
export default function BookDetails(){
  const book=useLoaderData();
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
export const loader = async(arg)=>{
  const res = await axiosInstance.get(`/book/${arg.params.id}`);
  return res.data;
};