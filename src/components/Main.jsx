import { useState } from 'react'
import movies from "../data/movieslist"

export default function Main() {
    const [movie, setMovie] = useState(movies)
    return (
        <div className="container">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Search a movie"
                />

            </div>
            <ul className="list-group">
                {movie.map((movie, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{movie.title}
                    </li>
                ))}
            </ul>
        </div>

    )
}