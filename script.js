var MovieGenre;
(function (MovieGenre) {
    MovieGenre["ACTION"] = "action";
    MovieGenre["COMEDY"] = "comedy";
    MovieGenre["THRILLER"] = "thriller";
    MovieGenre["HORROR"] = "horror";
    MovieGenre["SCIFI"] = "scifi";
})(MovieGenre || (MovieGenre = {}));
;
var mosquito = {
    title: "The Maze Runner",
    year: 2014,
    director: "Wes Ball",
    genre: MovieGenre.SCIFI,
    print: function () {
        console.log("\n                Title: ".concat(this.title, ",\n                Year: ").concat(this.year, ",\n                Directed by: ").concat(this.director, ",\n                Genre: ").concat(this.genre));
    }
};
var consultado = {
    title: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    genre: MovieGenre.ACTION,
    print: function () {
        console.log("\n                Title: ".concat(this.title, ",\n                Year: ").concat(this.year, ",\n                Directed by: ").concat(this.director, ",\n                Genre: ").concat(this.genre));
    }
};
mosquito.print();
consultado.print();
