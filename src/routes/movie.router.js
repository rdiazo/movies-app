const { getAll, create, getOne, remove, update, setMoviesGenres, setMoviesActors, setMoviesDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(getAll)
    .post(create);

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update)

movieRouter.route('/movies/:id/genres')
    .get(setMoviesGenres)


movieRouter.route('/movies/:id/actors')
    .get(setMoviesActors) 
    

movieRouter.route('/movies/:id/directors')
    .get(setMoviesDirectors)

module.exports = movieRouter;