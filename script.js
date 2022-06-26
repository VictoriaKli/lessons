'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
let filmScore = prompt('На сколько оцените его?', '');
let lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
let filmScore2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = filmScore;
personalMovieDB.movies[lastFilm2] = filmScore2;

console.log(personalMovieDB);