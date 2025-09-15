enum MovieGenre {
    ACTION = "action",
    COMEDY = "comedy",
    THRILLER = "thriller",
    HORROR = "horror",
    SCIFI = "scifi"
};

type Movie = {
    title: string;
    year: Date;
    director: string;
    genre: MovieGenre;
    print(): void;
};