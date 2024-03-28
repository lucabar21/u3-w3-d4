import Carousel from "react-bootstrap/Carousel";
import { Result } from "../interfaces/data";

interface SingleArticle {
  article: Result;
}

const SingleCarouselItem = ({ article }: SingleArticle) => {
  return (
    <>
      <img className="d-block w-100" src={article.image_url} alt="slide" />
      <Carousel.Caption>
        <h4 style={{ color: "white" }}>{article.title}</h4>
        <p style={{ color: "white" }}>{article.summary}</p>
      </Carousel.Caption>
    </>
  );
};
export default SingleCarouselItem;
