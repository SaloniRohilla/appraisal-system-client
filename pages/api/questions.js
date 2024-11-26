export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch the question data from your data source (e.g., database, API, etc.)
      const questionData = await fetchQuestionData();

      // Send the question data as the response
      res.status(200).json(questionData);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  } else {
    // Handle other HTTP methods (e.g., POST, PUT, DELETE) for the questions endpoint
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function fetchQuestionData() {
  // Implement the logic to fetch question data from your data source
  // This can be a simple in-memory data structure or a more complex database/API integration
  return [
    { id: 1, text: 'What is your role in the company?' },
    { id: 2, text: 'How long have you been with the company?' },
    // Add more question data as needed
  ];
}