enum MovieGenre {
    ACTION = "action",
    COMEDY = "comedy",
    THRILLER = "thriller",
    HORROR = "horror",
    SCIFI = "scifi"
};

type Movie = {
    title: string;
    year: number;
    director: string;
    genre: MovieGenre;
    print(): void;
};

const mosquito: Movie = {
    title: "The Maze Runner",
    year: 2014,
    director: "Wes Ball",
    genre: MovieGenre.SCIFI,
    print() {
        console.log(`
                Title: ${this.title},
                Year: ${this.year},
                Directed by: ${this.director},
                Genre: ${this.genre}`);
    }
};

const consultado: Movie = {
    title: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    genre: MovieGenre.ACTION,
    print() {
        console.log(`
                Title: ${this.title},
                Year: ${this.year},
                Directed by: ${this.director},
                Genre: ${this.genre}`);
    }
};

const esparagoza: Movie = {
    title: "Divergent",
    year: 2014,
    director: "Neil Burger",
    genre: MovieGenre.SCIFI,
    print() {
        console.log(`
                Title: ${this.title},
                Year: ${this.year},
                Directed by: ${this.director},
                Genre: ${this.genre}`);
    }
};

const veslino: Movie = {
    title: "The Godfather",
    year: 1972,
    director: "Francis Coppola",
    genre: MovieGenre.ACTION,
    print() {
        console.log(`
                Title: ${this.title},
                Year: ${this.year},
                Directed by: ${this.director},
                Genre: ${this.genre}`);
    }
};

const piadozo: Movie = {
    title: "Kid Kulafu",
    year: 2015,
    director: "Paul Soriano",
    genre: MovieGenre.ACTION,
    print() {
        console.log(`
                Title: ${this.title},
                Year: ${this.year},
                Directed by: ${this.director},
                Genre: ${this.genre}`);
    }
};

mosquito.print();
consultado.print();
esparagoza.print();
veslino.print();
piadozo.print();