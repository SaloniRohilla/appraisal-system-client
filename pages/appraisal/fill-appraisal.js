import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/FillAppraisal.module.css'

export default function FillAppraisal() {
    const [questions, setQuestions] = useState([])
    const [employees, setEmployees] = useState([])
    const [appraisalData, setAppraisalData] = useState({
        employee: '',
        questions: [],
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const [questionsRes, employeesRes] = await Promise.all([
                    axios.get('/api/questions'),
                    axios.get('/api/users'),
                ])

                if (questionsRes.data && employeesRes.data) {
                    setQuestions(questionsRes.data)
                    setEmployees(employeesRes.data)

                    // Initialize questions with default ratings
                    const initialQuestions = questionsRes.data.map((q) => ({
                        question: q._id,
                        rating: 3,
                        comments: '',
                    }))

                    setAppraisalData((prev) => ({
                        ...prev,
                        questions: initialQuestions,
                    }))
                } else {
                    throw new Error('Received empty data from API')
                }
                
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch data', error)
                setError('Failed to load appraisal data. Please try again later.')
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!appraisalData.employee) {
                alert('Please select an employee')
                return
            }

            const response = await axios.post('/api/appraisals', appraisalData)
            alert('Appraisal submitted successfully')
            
            // Reset form
            setAppraisalData({
                employee: '',
                questions: [],
            })
        } catch (error) {
            console.error('Failed to submit appraisal', error)
            alert(error.response?.data?.message || 'Failed to submit appraisal')
        }
    }

    const updateQuestion = (index, field, value) => {
        const updatedQuestions = [...appraisalData.questions]
        updatedQuestions[index][field] = value

        setAppraisalData((prev) => ({
            ...prev,
            questions: updatedQuestions,
        }))
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div className={styles.container}>
            <h2>Fill Appraisal</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <select
                    value={appraisalData.employee}
                    onChange={(e) =>
                        setAppraisalData((prev) => ({
                            ...prev,
                            employee: e.target.value,
                        }))
                    }
                    required
                    className={styles.selectEmployee}
                >
                    <option value="">Select Employee</option>
                    {employees.map((emp) => (
                        <option key={emp._id} value={emp._id}>
                            {emp.name}
                        </option>
                    ))}
                </select>

                {appraisalData.questions.map((q, index) => {
                    const question = questions.find((qu) => qu._id === q.question)
                    return (
                        <div key={q.question} className={styles.questionContainer}>
                            <p className={styles.questionText}>{question?.text}</p>
                            <select
                                value={q.rating}
                                onChange={(e) =>
                                    updateQuestion(index, 'rating', Number(e.target.value))
                                }
                                className={styles.ratingSelect}
                            >
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <option key={rating} value={rating}>
                                        {rating}
                                    </option>
                                ))}
                            </select>
                            <textarea
                                value={q.comments}
                                onChange={(e) =>
                                    updateQuestion(index, 'comments', e.target.value)
                                }
                                placeholder="Comments"
                                className={styles.commentBox}
                            />
                        </div>
                    )
                })}

                <button type="submit" className={styles.submitButton}>
                    Submit Appraisal
                </button>
            </form>
        </div>
    )
}
