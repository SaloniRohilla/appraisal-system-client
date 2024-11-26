export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch the user data from your data source (e.g., database, API, etc.)
      const userData = await fetchUserData();

      // Send the user data as the response
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else {
    // Handle other HTTP methods (e.g., POST, PUT, DELETE) for the users endpoint
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function fetchUserData() {
  // Implement the logic to fetch user data from your data source
  // This can be a simple in-memory data structure or a more complex database/API integration
  return [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more user data as needed
  ];
}