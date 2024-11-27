import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/MapParticipants.module.css' // Ensure correct path to CSS module

export default function MapParticipants() {
  const [users, setUsers] = useState([])
  const [mapping, setMapping] = useState({
    userId: '',
    supervisorId: '',
    peerIds: [],
    juniorIds: [],
  })
  const [loading, setLoading] = useState(false) // State to track loading status
  const [error, setError] = useState('') // State to track any errors

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users')
        setUsers(res.data)
      } catch (error) {
        console.error('Failed to fetch users', error)
        setError('Failed to fetch users')
      }
    }
    fetchUsers()
  }, [])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) // Start loading
    setError('') // Reset error state
    try {
      await axios.post('/api/users/map-participants', mapping)
      alert('Participants mapped successfully')
    } catch (error) {
      console.error('Failed to map participants', error)
      setError('Failed to map participants') // Set error message
    } finally {
      setLoading(false) // End loading
    }
  }

  // Handle checkbox change
  const handleCheckboxChange = (userId, group) => {
    setMapping((prevMapping) => {
      const updatedGroup = [...prevMapping[group]]
      const index = updatedGroup.indexOf(userId)
      if (index > -1) {
        updatedGroup.splice(index, 1) // Remove userId
      } else {
        updatedGroup.push(userId) // Add userId
      }
      return {
        ...prevMapping,
        [group]: updatedGroup,
      }
    })
  }

  return (
    <div className={styles.container}>
      <h2>Map Participants</h2>
      {error && <div className={styles.error}>{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <select
          value={mapping.userId}
          onChange={(e) => setMapping({ ...mapping, userId: e.target.value })}
          required
          className={styles.selectUser}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>

        <select
          value={mapping.supervisorId}
          onChange={(e) => setMapping({ ...mapping, supervisorId: e.target.value })}
          className={styles.selectSupervisor}
        >
          <option value="">Select Supervisor</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>

        <div className={styles.peerGroup}>
          <h3>Peers</h3>
          {users.map((user) => (
            <label key={user._id} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={mapping.peerIds.includes(user._id)}
                onChange={() => handleCheckboxChange(user._id, 'peerIds')}
                className={styles.checkboxInput}
                aria-label={`Map ${user.name} as peer`}
              />
              {user.name}
            </label>
          ))}
        </div>

        <div className={styles.juniorGroup}>
          <h3>Juniors</h3>
          {users.map((user) => (
            <label key={user._id} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={mapping.juniorIds.includes(user._id)}
                onChange={() => handleCheckboxChange(user._id, 'juniorIds')}
                className={styles.checkboxInput}
                aria-label={`Map ${user.name} as junior`}
              />
              {user.name}
            </label>
          ))}
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Mapping...' : 'Map Participants'}
        </button>
      </form>
    </div>
  )
}
