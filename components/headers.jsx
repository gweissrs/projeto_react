export function Header({tema, toggleTema}){
    return(
        <div className="header-conteiner">
        
        <h1>Cine<Spam>Estu</Spam></h1>
        <button className="btn-theme" onClick={toggleTema}>
            {tema ==="light" ? "Dark Mode" : "Light Mode"}
        </button>
        
        </div>
    )
}