let moviesDB = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        release_date: "1994-09-23",
        vote_average: 8.7,
        genres: [
            { id: 18, name: "Drama" }
        ]
    },
    {
        id: 2,
        title: "The Godfather",
        overview: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        release_date: "1972-03-14",
        vote_average: 8.7,
        genres: [
            { id: 80, name: "Crime" },
            { id: 18, name: "Drama" }
        ]
    },
    // Agrega más películas según sea necesario
];

// Función para obtener una película por su ID
function getMovieById(id) {
    return moviesDB.find(movie => movie.id === id);
}

// Función para actualizar una película por su ID
function updateMovieById(id, updatedMovie) {
    const index = moviesDB.findIndex(movie => movie.id === id);
    if (index !== -1) {
        moviesDB[index] = { ...updatedMovie, id: id };
        return true; // Devolver true si la actualización fue exitosa
    }
    return false; // Devolver false si no se encontró la película con el ID dado
}

