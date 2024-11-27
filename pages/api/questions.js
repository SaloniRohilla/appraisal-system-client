// client/pages/api/questions.js
import connectDB from '../../../server/config/db';  // MongoDB connection
import Question from '../../../server/models/Question';  // Question model

export default async function handler(req, res) {
  // Connect to the database
  await connectDB();

  if (req.method === 'GET') {
    try {
      // Fetch all questions from the MongoDB collection using Mongoose
      const questions = await Question.find();
      res.status(200).json(questions); // Send questions in the response
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  } else if (req.method === 'POST') {
    try {
      const { text, category } = req.body;

      // Create a new question using the Mongoose model
      const newQuestion = new Question({
        text,
        category,
      });

      // Save the new question to the database
      await newQuestion.save();

      res.status(201).json(newQuestion); // Respond with the created question
    } catch (error) {
      console.error('Failed to create question', error);
      res.status(500).json({ error: 'Failed to create question' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
