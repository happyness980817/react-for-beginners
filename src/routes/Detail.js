import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"; 

// useparams : function provided by react router ,
// returns changing value inside url (params)

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await(
            (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        ).json();
            setMovie(json.data.movie)
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (<div>
        <h1>Detail</h1>
        <p>{movie.description_full}</p>

    </div>)
}

export default Detail;