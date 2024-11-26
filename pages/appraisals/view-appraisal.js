import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewAppraisal() {
  const [appraisals, setAppraisals] = useState([]);

  useEffect(() => {
    const fetchAppraisals = async () => {
      try {
        const res = await axios.get('/api/appraisals');
        setAppraisals(res.data);
      } catch (error) {
        console.error('Failed to fetch appraisals', error);
      }
    };
    
    fetchAppraisals();
  }, []);

  return (
    <div>
      <h2>View Appraisals</h2>
      {appraisals.map(appraisal => (
        <div key={appraisal._id}>
          <h3>Employee: {appraisal.employee.name}</h3>
          <p>Evaluator: {appraisal.evaluator.name}</p>
          {appraisal.questions.map(q => (
            <div key={q.question._id}>
              <p>{q.question.text}</p>
              <p>Rating: {q.rating}</p>
              <p>Comments: {q.comments}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}