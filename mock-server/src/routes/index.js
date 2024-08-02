import express from 'express';
import AppRouter from './app/index.js';

const Router = express.Router();

// Config app router
Router.use('/app', AppRouter);

export default Router;
