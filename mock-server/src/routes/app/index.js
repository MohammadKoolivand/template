import express from 'express';
import { GetSite, SignUp } from '../../controllers/app/siteController.js';

const AppRouter = express.Router();

// Get Methods
AppRouter.get('/', GetSite);


// POST Methods
AppRouter.post('/signup', SignUp);

export default AppRouter;
