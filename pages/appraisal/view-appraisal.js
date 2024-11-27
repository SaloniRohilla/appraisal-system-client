import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from '../../styles/ViewAppraisal.module.css'

const ViewAppraisal = () => {
  const [appraisals, setAppraisals] = useState([]) // Ensure it's an empty array by default
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  })

  const fetchAppraisals = async (page = 1) => {
    try {
      setLoading(true)
      const res = await axios.get(
        'http://localhost:5000/api/appraisals/getAppraisals',
        {
          params: { page, limit: 10 },
        },
      )

      // Assuming the response contains appraisals and pagination data
      setAppraisals(res.data.appraisals || []) // Safely set appraisals
      setPagination({
        currentPage: page,
        totalPages: res.data.totalPages || 1, // Update the totalPages from the response
      })
    } catch (error) {
      console.error('Failed to fetch appraisals', error)
      setError('Failed to load appraisals. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppraisals() // Fetch appraisals on initial render
  }, [])

  const handlePageChange = (newPage) => {
    fetchAppraisals(newPage) // Fetch appraisals for the selected page
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>View Appraisals</h1>
      <ul className={styles.appraisalList}>
        {appraisals.length > 0 ? (
          appraisals.map((appraisal) => (
            <li key={appraisal._id} className={styles.appraisalItem}>
              <div className={styles.appraisalDetails}>
                <div className={styles.appraisalEmployee}>
                  Employee: {appraisal.employee?.name || 'N/A'}
                </div>
                <div
                  className={`${styles.appraisalStatus} ${
                    styles[appraisal.status.toLowerCase()]
                  }`}
                >
                  Status: {appraisal.status}
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No appraisals available.</p>
        )}
      </ul>

      {/* Pagination buttons */}
      <div className={styles.pagination}>
        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === pagination.currentPage}
              className={styles.pageButton}
            >
              {page}
            </button>
          ),
        )}
      </div>
    </div>
  )
}

export default ViewAppraisal
