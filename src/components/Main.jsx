import { useEffect, useState } from 'react'
import Movies from "../data/movieslist"

export default function Main() {
    const [movies, setMovies] = useState(Movies)
    const [filteredMovie, setFilteredMovie] = useState(Movies)
    const [selectedGenre, setSelectedGenre] = useState('')

    useEffect(() => {
        console.log('Hello World');
        setFilteredMovie(movies.filter(movie => movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())))
    }, [movies, selectedGenre])

    return (
        <div className="container">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Search a genre..."
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)
                    }
                />

            </div>
            <ul className="list-group">
                {filteredMovie.map((movie, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{movie.title}
                    </li>
                ))}
            </ul>
        </div>

    )
}