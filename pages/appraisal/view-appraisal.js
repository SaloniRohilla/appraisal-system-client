import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from '../../styles/ViewAppraisal.module.css' // Correct path to the CSS module

const ViewAppraisal = () => {
  const [appraisals, setAppraisals] = useState([])

  const fetchAppraisals = async () => {
    try {
      const res = await axios.get('/api/appraisals')
      setAppraisals(res.data)
    } catch (error) {
      console.error('Failed to fetch appraisals', error)
    }
  }

  useEffect(() => {
    fetchAppraisals()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>View Appraisals</h1>
      <ul className={styles.appraisalList}>
        {appraisals.map((appraisal) => (
          <li key={appraisal.id} className={styles.appraisalItem}>
            <div className={styles.appraisalTitle}>{appraisal.title}</div>
            <div
              className={`${styles.appraisalStatus} ${
                styles[appraisal.status.toLowerCase()]
              }`}
            >
              Status: {appraisal.status}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewAppraisal
