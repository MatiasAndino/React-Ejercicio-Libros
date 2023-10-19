

export const SelectedFilter = ({ setSelectedGenre }) => {
    return (
        <label>
            Filtrar por genero:
            <select name="selectedFilter" onChange={ (e) => setSelectedGenre(e.target.value) } className="mb-5">
                <option value="Todos">Todos</option>
                <option value="Terror">Terror</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Zombies">Zombies</option>
            </select>
        </label>    
    )
}