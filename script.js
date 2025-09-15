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
    year: new Date("2014"),
    director: "Wes Ball",
    genre: MovieGenre.SCIFI,
    print: function () {
        console.log("\n                Title: ".concat(this.title, ",\n                Year: (").concat(this.year.getFullYear(), "),\n                Directed by: ").concat(this.director, ",\n                Genre: ").concat(this.genre));
    }
};
mosquito.print();
