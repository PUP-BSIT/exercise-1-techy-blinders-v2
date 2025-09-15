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

const mosquito: Movie = {
    title: "The Maze Runner",
    year: new Date("2014"),
    director: "Wes Ball",
    genre: MovieGenre.SCIFI,
    print() {
        console.log(`
                Title: ${this.title},
                Year: (${this.year.getFullYear()}),
                Directed by: ${this.director},
                Genre: ${this.genre}`);
    }
};

mosquito.print();