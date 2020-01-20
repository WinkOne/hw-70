import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PageTv = (props) => {

    const [getFilm, setFilm] = useState({});

    const getFilmID = async () => {
      const response = await axios.get(' http://api.tvmaze.com/shows/' + props.match.params.id);
      const data = response.data;
        setFilm({
            name: data.name,
            img: data.image.original,
            text: data.summary,
            type: data.type,
            schedule: data.schedule,
        });
    };
    useEffect(() => {


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getFilmID(), props.match.params.id]);
    return (
        <div style={{margin: "15px"}}>
            <img style={{width: "320px"}} src={getFilm.img} alt=""/>
            <h2>{getFilm.name}</h2>
            <h4>{getFilm.type}</h4>
            <p>{getFilm.text}</p>

        </div>
    );
};

export default PageTv;