import Carousel from "react-bootstrap/Carousel";
import SingleCarouselItem from "./SingleCarouselItem";
import { useState, useEffect } from "react";
import { Result } from "../interfaces/data";
import { Data } from "../interfaces/data";
import { Link } from "react-router-dom";

// export interface Data {
//   count: number;
//   next: string;
//   previous: null;
//   results: [];
// }

// export interface Return {
//   id: number;
//   title: string;
//   url: string;
//   image_url: string;
//   news_site: string;
//   summary: string;
//   published_at: Date;
//   featured: boolean;
// }

const MainSectionComponent = () => {
  const [data, setData] = useState<Result[]>([]);

  const fetchData = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("problema nella chiamata API");
        }
      })
      .then((arrayOfArticles: Data) => {
        console.log("DATI", arrayOfArticles);
        setData(arrayOfArticles.results);
      })
      .catch((e) => console.log("ERRORE", e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel data-bs-theme="dark">
      {data.slice(0, 6).map((article) => (
        <Carousel.Item key={article.id} id="car-img">
          <Link to={`/details/` + article.id}>
            <SingleCarouselItem article={article} />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default MainSectionComponent;
