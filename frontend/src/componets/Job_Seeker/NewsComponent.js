import React from "react";

export default function NewsComponent(props)
{

    return(<div className="card" style={{width:"900px",margin:"20px"}}>
    <img src={props.data.urlToImage} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.data.title}</h5>
      <p className="card-text">{props.data.description}</p>
      <p style={{fontFamily:"Poppins"}}><b>Publish At </b>{props.data.publishedAt}</p>
     
      <p style={{fontFamily:"Poppins"}}>{props.data.content}</p>
      <a href={props.data.url} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>);
}