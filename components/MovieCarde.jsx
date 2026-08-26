export function MovieCarde({filme, onToggleFavorite}){
    return(
        <div className="movie-card">
            <div className="poster-box">{filme.emoji}</div>
            <div>
                <h3 className="movie-title">{filme.titulo}</h3>
                <p className="movie-genre">{filme.genero}</p>
            </div>

            <button
            className={`btn-favorite ${filme.favorito ? "favorited" : ""}`}
                onClick={()=> onToggleFavorite(filme.id)}
                >
                    {filme.favorito ?"❤️ Favorito" : "🤍 Favoritar"}
            </button>

        </div>
    )
}