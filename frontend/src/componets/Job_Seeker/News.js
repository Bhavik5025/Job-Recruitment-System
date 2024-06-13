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
    return(<><div className="flex flex-col items-center justify-end lg:flex-row">
        <div className="w-full max-w-1/3 lg:w-9/12">
          <label className="parent_label text-2xl font-bold mb-4 ml-20 lg:ml-0 md:ml-0 mt-10">Current Technology Related News</label>
          <div className="card text-center w-full mt-8">
  <div className="card-header grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:justify-center">
    <button className="centered-button" onClick={india} style={sindia ? { backgroundColor: "white", color: "#007bff", border: "solid" } : null}>India</button>
    <button className="centered-button" onClick={Australia} style={australia ? { backgroundColor: "white", color: "#007bff", border: "solid" } : null}>Australia</button>
    <button className="centered-button" onClick={france} style={sfrance ? { backgroundColor: "white", color: "#007bff", border: "solid" } : null}>France</button>
    <button className="centered-button" onClick={russia} style={srussia ? { backgroundColor: "white", color: "#007bff", border: "solid" } : null}>Russia</button>
    <button className="centered-button" onClick={Uk} style={suk ? { backgroundColor: "white", color: "#007bff", border: "solid" } : null}>UK</button>
    <button className="centered-button" onClick={Usa} style={susa ? { backgroundColor: "white", color: "#007bff", border: "solid" } : null}>USA</button>
  </div>
</div>

          <div className="card-body w-full mt-4">
            {sindia ? <Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/in.json" /> : null}
            {srussia ? <Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/ru.json" /> : null}
            {suk ? <Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/gb.json" /> : null}
            {susa ? <Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/us.json" /> : null}
            {australia ? <Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/au.json" /> : null}
            {sfrance ? <Getnews api="https://saurav.tech/NewsAPI/top-headlines/category/science/fr.json" /> : null}
          </div>
        </div>
      </div>
      
              </>)
}