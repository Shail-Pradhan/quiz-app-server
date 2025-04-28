import express from 'express';
import { createQuiz, getAllQuizzes, getQuizById } from '../controllers/quizController.js';

const router = express.Router();

router.post('/', createQuiz); // Create Quiz
router.get('/', getAllQuizzes); // Get All Quizzes
router.get('/:id', getQuizById); // Get Quiz by ID

export default router;