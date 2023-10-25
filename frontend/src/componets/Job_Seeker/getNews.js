
// import { common } from "@mui/material/colors";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import NewsComponent from "./NewsComponent";

// export default function Getnews(props)
// {
//     var [news,setNews]=useState([]);
    
// useEffect(()=>{
//     axios.get(props.api).then((data)=>{
//         setNews(data.data.articles);
//     }).catch((error)=>{
//         console.log(error);
//     });
// },[]);
//     return(
//         <div>
//             {news?console.log(news):null}
//             {news?news.map((data)=>{
//                 <Getnews data={data}/>
//             }):null}
//         </div>
//     )
// }
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
