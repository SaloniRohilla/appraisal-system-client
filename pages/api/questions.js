import mongoose from 'mongoose';
import Question from '../../server/models/Question'; // Import the model from the server side

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Logic to fetch questions
      const questions = await Question.find({ isActive: true });
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching questions', error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { text, category } = req.body;
      const newQuestion = new Question({ text, category });
      await newQuestion.save();
      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(500).json({ message: 'Error creating question', error: error.message });
    }
  }
}
