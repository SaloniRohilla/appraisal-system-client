import axios from 'axios';
import { useState, useEffect } from 'react';

const ViewAppraisal = () => {
  const [appraisals, setAppraisals] = useState([]);

  const fetchAppraisals = async () => {
    try {
      const res = await axios.get('/api/appraisals');
      setAppraisals(res.data);
    } catch (error) {
      console.error('Failed to fetch appraisals', error);
    }
  };

  useEffect(() => {
    fetchAppraisals();
  }, []);

  return (
    <div>
      <h1>View Appraisals</h1>
      <ul>
        {appraisals.map((appraisal) => (
          <li key={appraisal.id}>
            {appraisal.title} - Status: {appraisal.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAppraisal;