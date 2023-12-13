import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=231083e38b78a31129aa0ad39cf290bd&targetDt=20231212`
    );
    const json = await response.json();
    const boxOfficeList = json.boxOfficeResult.dailyBoxOfficeList;
    setMovies(boxOfficeList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>My Movie App</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <div key={index}>
              <h2>{movie.movieNm}</h2>
              <h3>release date: {movie.openDt}</h3>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
