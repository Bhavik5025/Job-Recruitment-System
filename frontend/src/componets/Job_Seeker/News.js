import axios from "axios";
import React, { useEffect, useState } from "react";
import Getnews from "./getNews";
export default function News()
{
    var [news,setNews]=useState();
    var [sindia,setSindia]=useState();
    var [srussia,setSrussia]=useState();
    var [suk,setSUK]=useState();
    var [susa,setSusa]=useState();
    var [sfrance,setSfrance]=useState();
    var [australia,setSaustralia]=useState();
    
  
   
    function india()
    {
        setSindia(true);
        setSfrance(false);
        setSUK(false);
        setSrussia(false);
        setSusa(false);
        setSaustralia(false);
    }
    function russia()
    {
        setSindia(false);
        setSfrance(false);
        setSusa(false);
        setSUK(false);
        setSrussia(true);
        setSaustralia(false);
    }
    function Australia()
    {
        setSindia(false);
        setSfrance(false);
        setSUK(false);
        setSrussia(false);
        setSaustralia(true);
        setSusa(false);
    }
    function Usa()
    {
        setSusa(true);
        setSindia(false);
        setSfrance(false);
        setSUK(false);
        setSrussia(false);
        setSaustralia(false);
    }
    function Uk()
    {
        setSindia(false);
        setSfrance(false);
        setSusa(false);
        setSUK(true);
        setSrussia(false);
        setSaustralia(false);
    }
    function france()
    {
        setSindia(false);
        setSfrance(true);
        setSusa(false);
        setSUK(false);
        setSrussia(false);
        setSaustralia(false);
    }
    return(<><label className="parent_label" style={{marginTop:"20px",marginLeft:"480px"}}>Current Technology Related News</label>
    <div class="card text-center" style={{width:"1000px",marginLeft:"260px",marginTop:"40px"}}>
    <div class="card-header">
    <button className="centered-button" onClick={india} style={sindia==true?{backgroundColor:"white",color:"#007bff",border:"solid"}:null}>India</button><button className="centered-button" onClick={Australia} style={australia==true?{backgroundColor:"white",color:"#007bff",border:"solid"}:null}>Australia</button><button className="centered-button" onClick={france} style={sfrance==true?{backgroundColor:"white",color:"#007bff",border:"solid"}:null}>France</button><button className="centered-button" onClick={russia} style={srussia==true?{backgroundColor:"white",color:"#007bff",border:"solid"}:null}>Russia</button><button className="centered-button" onClick={Uk} style={suk==true?{backgroundColor:"white",color:"#007bff",border:"solid"}:null}>UK</button>
    <button className="centered-button" onClick={Usa} style={susa==true?{backgroundColor:"white",color:"#007bff",border:"solid"}:null}>USA</button>
     </div>
    </div>
    <div className="card-body" style={{marginLeft:"260px"}}>
            {sindia==true?<Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/in.json"/>:null}
            {srussia==true?<Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/ru.json"/>:null}
            {suk==true?<Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/gb.json"/>:null}
            {susa==true?<Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/us.json"/>:null}
            {australia==true?<Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/au.json"/>:null}
            {sfrance==true?<Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/fr.json"/>:null}
        
  </div>
    </>)
}