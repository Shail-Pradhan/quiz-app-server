import Quiz from '../models/Quiz.js';

// Create a new quiz
export const createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all quizzes
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.send(quizzes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a quiz by ID
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).send({ message: 'Quiz not found' });
    }
    res.send(quiz);
  } catch (error) {
    res.status(500).send(error);
  }
};