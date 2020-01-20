import React, {useState} from 'react';
import axiosApi from "../../axios-api";
import "./Autocomplete.css"
import {NavLink} from "react-router-dom";


export default function ComboBox() {
    let blockAndNone;
    const valueChanged = (event) => {
        setEventFilms(event.target.value);
        getApiFilms();
    };

    const [films, setFilms] = useState([]);
    const [eventFilms, setEventFilms] = useState("");

    const getApiFilms = async () => {
        const response = await axiosApi.get('shows?q=' + eventFilms);
        const responseData = response.data;
        setFilms(responseData)
    };
    if(eventFilms === ""){
        blockAndNone = "none"
    } else {
        blockAndNone = "block"
    }

    return (
        <div className={"autocompliteBox"}>
            <input onChange={valueChanged} type="text"/>
            <div style={{display: blockAndNone}} className={"autocompliteItem"}>
                {films.map((name, index) => (
                    <div key={index}>
                        <NavLink to={'/shows/'+ name.show.id}><p>{name.show.name}</p></NavLink>
                    </div>
                ))}
            </div>
        </div>


    );
};

