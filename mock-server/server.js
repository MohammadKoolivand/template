import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import addLocale2ReqMiddleware from './src/middlewares/addLocale2Req.js';
import V1Router from './src/routes/index.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = http.createServer(app);

// Configure body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set public folder
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATA_BASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('strictQuery', true);

// Configure CORS
app.use(cors());

// Use middleware and routes
app.use(addLocale2ReqMiddleware, V1Router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
