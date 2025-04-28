import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswerIndex: Number,
    }
  ],
  createdBy: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;