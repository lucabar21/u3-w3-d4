import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailsData } from "../interfaces/data";
import Card from "react-bootstrap/Card";

const DetailSectionComponent = () => {
  const [detail, setDetail] = useState<detailsData[]>([]);

  const params = useParams();

  const fetchDetails = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.articleId}/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("problema nella chiamata API");
        }
      })
      .then((arrayOfDetails: detailsData[]) => {
        console.log("DETTAGLI", arrayOfDetails);
        setDetail(arrayOfDetails);
      })
      .catch((e) => console.log("ERRORE", e));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={detail.image_url} />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DetailSectionComponent;
