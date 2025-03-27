import { useEffect, useState } from 'react'
import Movies from "../data/movieslist"

export default function Main() {
    const [movies, setMovies] = useState(Movies)
    const [newMovie, setNewMovie] = useState('')
    const [filteredMovie, setFilteredMovie] = useState(Movies)
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedTitle, setSelectedTitle] = useState('')

    useEffect(() => {
        console.log('Hello World');
        setFilteredMovie(movies.filter(movie => movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())))
    }, [movies, selectedGenre]);

    useEffect(() => {
        setFilteredMovie(movies.filter(movie => movie.title.toLowerCase().includes(selectedTitle.toLowerCase())))
    }, [movies, selectedTitle])

    const handleAddMovie = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Search by genre..."
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)
                    }
                />

            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Search by title..."
                    value={selectedTitle}
                    onChange={(e) => setSelectedTitle(e.target.value)}
                />
            </div>

            <ul className="list-group">
                {filteredMovie.map((movie, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{movie.title}
                    </li>
                ))}
            </ul>
            <form>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder="Add a new movie..."
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>

            </form>

            <button type="submit" className='btn btn-primary my-3'>Send</button>
        </div>

    )
}