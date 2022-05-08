import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] =useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos)
    }

    function search (){
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);  

        const pexelsApiKey = "563492ad6f91700001000001e8c5e0eb0aaa4aee92af0cc88677929a";
        const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }; 
        axios.get(pexelsUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
      return(
        <div className="Dictionary">
            <section>
            <h1>What word are you looking up?</h1>    
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
            </form> 
            <div className="hint">
                suggested words: sunset, wine, yoga, plant ...
            </div>
            </section>
            <Results results={results}/>  
            <Photos photos={photos} />
        </div>
    )  
    }else{
        load();
        return "Loading"
    }
    
}