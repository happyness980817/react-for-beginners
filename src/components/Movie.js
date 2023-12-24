import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    return (<div>
        <img src={coverImg} alt={title}/>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2> 
        <p>{summary}</p>
        <ul>
            {genres.map && genres.map((g) => (<li key={g}>{g}</li>))} 
        </ul>
  </div>); // Link -> element 에 href 처럼 링크 부여? 
  // Link 컴포넌트 역시 BrowserRouter에 포함되어야 하며, 
  // to={path}가 가리키는 경로로 url이 바뀌며 위 라우터가 동작한다.
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie;