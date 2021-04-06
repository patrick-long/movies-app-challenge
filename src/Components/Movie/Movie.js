import './Movie.css'; 

const Movie = (props) => {
    return(
        <div className="card-container">
            {props.movies.results.map(result => 
                <div className="movie-card">
                    <p>{result.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} />
                </div> 
            )}
        </div>
    )
}

export default Movie;