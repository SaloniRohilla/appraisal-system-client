export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        // Fetch the appraisal data from your data source (e.g., database, API, etc.)
        const appraisalData = await fetchAppraisalData();
  
        // Send the appraisal data as the response
        res.status(200).json(appraisalData);
      } catch (error) {
        console.error('Error fetching appraisals:', error);
        res.status(500).json({ error: 'Failed to fetch appraisals' });
      }
    } else {
      // Handle other HTTP methods (e.g., POST, PUT, DELETE) for the appraisals endpoint
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  
  async function fetchAppraisalData() {
    // Implement the logic to fetch appraisal data from your data source
    // This can be a simple in-memory data structure or a more complex database/API integration
    return [
      { id: 1, title: 'Appraisal 1', status: 'Pending' },
      { id: 2, title: 'Appraisal 2', status: 'Completed' },
      // Add more appraisal data as needed
    ];
  }