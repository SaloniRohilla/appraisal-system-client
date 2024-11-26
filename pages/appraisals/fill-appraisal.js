import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FillAppraisal() {
  const [questions, setQuestions] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [appraisalData, setAppraisalData] = useState({
    employee: '',
    questions: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questionsRes, employeesRes] = await Promise.all([
          axios.get('/api/questions'),
          axios.get('/api/users')
        ]);
        
        setQuestions(questionsRes.data);
        setEmployees(employeesRes.data);
        
        // Initialize questions with default ratings
        const initialQuestions = questionsRes.data.map(q => ({
          question: q._id,
          rating: 3,
          comments: ''
        }));
        
        setAppraisalData(prev => ({
          ...prev,
          questions: initialQuestions
        }));
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };
    
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appraisals', appraisalData);
      alert('Appraisal submitted successfully');
    } catch (error) {
      console.error('Failed to submit appraisal', error);
    }
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...appraisalData.questions];
    updatedQuestions[index][field] = value;
    
    setAppraisalData(prev => ({
      ...prev,
      questions: updatedQuestions
    }));
  };

  return (
    <div>
      <h2>Fill Appraisal</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={appraisalData.employee}
          onChange={(e) => setAppraisalData(prev => ({
            ...prev,
            employee: e.target.value
          }))}
          required
        >
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp._id} value={emp._id}>
              {emp.name}
            </option>
          ))}
        </select>

        {appraisalData.questions.map((q, index) => {
          const question = questions.find(qu => qu._id === q.question);
          return (
            <div key={q.question}>
              <p>{question?.text}</p>
              <select
                value={q.rating}
                onChange={(e) => updateQuestion(index, 'rating', Number(e.target.value))}
              >
                {[1,2,3,4,5].map(rating => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
              <textarea
                value={q.comments}
                onChange={(e) => updateQuestion(index, 'comments', e.target.value)}
                placeholder="Comments"
              />
            </div>
          );
        })}

        <button type="submit">Submit Appraisal</button>
      </form>
    </div>
  );
}