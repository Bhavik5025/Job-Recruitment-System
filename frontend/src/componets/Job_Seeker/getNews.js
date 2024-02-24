
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsComponent from "./NewsComponent";

export default function GetNews(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(props.api)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [props.api]);

  return (
    <div>
      {news.length > 0 ? (
        <div>
          {news.map((article, index) => (
            <NewsComponent key={index} data={article} />
          ))}
        </div>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}
