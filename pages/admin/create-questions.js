import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/CreateQuestion.module.css' // Correct path to CSS module

export default function CreateQuestions() {
  const [questions, setQuestions] = useState([])
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    category: 'PERFORMANCE',
  })

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('/api/questions')
      setQuestions(res.data)
    } catch (error) {
      console.error('Failed to fetch questions', error)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/questions', newQuestion)
      fetchQuestions()
      setNewQuestion({ text: '', category: 'PERFORMANCE' })
    } catch (error) {
      console.error('Failed to create question', error)
    }
  }

  return (
    <div>
      <h2 className={styles.heading}>Create Questions</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={newQuestion.text}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, text: e.target.value })
          }
          placeholder="Question Text"
          required
        />
        <select
          className={styles.select}
          value={newQuestion.category}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, category: e.target.value })
          }
        >
          <option value="PERFORMANCE">Performance</option>
          <option value="SKILLS">Skills</option>
          <option value="BEHAVIOR">Behavior</option>
        </select>
        <button className={styles.button} type="submit">
          Create Question
        </button>
      </form>

      <h3 className={styles.subheading}>Existing Questions</h3>
      <ul className={styles.questionList}>
        {questions.map((q) => (
          <li key={q._id} className={styles.questionItem}>
            {q.text} (Category: {q.category})
          </li>
        ))}
      </ul>
    </div>
  )
}
