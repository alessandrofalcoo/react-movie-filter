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
        if (newMovie === '') {
            alert('Devi inserire un film')
        }
        console.log(setNewMovie(...movies))

        setNewMovie('')
    }

    return (
        <div className="container">
            <div className="mb-3">
                <select className="my-3 p-1" name="genre" id="genre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="">Select a genre</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>

                </select>
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
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {movie.title}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddMovie}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder="Add a new movie..."
                        value={newMovie}
                        onChange={(e) => setNewMovie(e.target.value)}
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>

            </form>

            <button onClick={handleAddMovie} type="submit" className='btn btn-primary my-3'>Send</button>
        </div>

    )
}