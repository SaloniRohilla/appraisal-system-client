import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateQuestions() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    category: 'PERFORMANCE'
  });

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('/api/questions');
      setQuestions(res.data);
    } catch (error) {
      console.error('Failed to fetch questions', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/questions', newQuestion);
      fetchQuestions();
      setNewQuestion({ text: '', category: 'PERFORMANCE' });
    } catch (error) {
      console.error('Failed to create question', error);
    }
  };

  return (
    <div>
      <h2>Create Questions</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newQuestion.text}
          onChange={(e) => setNewQuestion({...newQuestion, text: e.target.value})}
          placeholder="Question Text"
          required
        />
        <select
          value={newQuestion.category}
          onChange={(e) => setNewQuestion({...newQuestion, category: e.target.value})}
        >
          <option value="PERFORMANCE">Performance</option>
          <option value="SKILLS">Skills</option>
          <option value="BEHAVIOR">Behavior</option>
        </select>
        <button type="submit">Create Question</button>
      </form>

      <h3>Existing Questions</h3>
      <ul>
        {questions.map(q => (
          <li key={q._id}>
            {q.text} (Category: {q.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
