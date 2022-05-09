import React from "react";
import "./Photos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Photos(props){
    if (props.photos){
        return (
            <section >
                <div className="Photos">
                    <div className="row">
                        {props.photos.map(function(photo, index){
                            return (
                            <div className="col-6" key={index}>
                                <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                                    <img src={photo.src.landscape} alt={photo.alt} className="img-fluid"/>
                                </a>
                            </div>
                        ); 
                        })}  
                    </div>  
                </div>
            
            </section>
        );
    } else{
        return null;
    }
}