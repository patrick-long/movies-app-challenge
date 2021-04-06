import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 
import Movie from './Components/Movie/Movie';

function App() {

  const [ movie, setMovie ] = useState({
    results: []
  })

  const getAppData = async () => {
    const movies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=US`).then(res => res.json());
    console.log(movies);
    setMovie({
      results: movies.results
    })
  }

  console.log(movie.results);

  useEffect(() => {
    getAppData();
    console.log('useEffect was called')
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Movies App
      </header>
      <Movie movies={movie} />
    </div>
  );
}

export default App;
