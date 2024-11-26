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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users')
        setUsers(res.data)
      } catch (error) {
        console.error('Failed to fetch users', error)
      }
    }
    fetchUsers()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/users/map-participants', mapping)
      alert('Participants mapped successfully')
    } catch (error) {
      console.error('Failed to map participants', error)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Map Participants</h2>
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
          onChange={(e) =>
            setMapping({ ...mapping, supervisorId: e.target.value })
          }
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
                onChange={() => {
                  const newPeerIds = mapping.peerIds.includes(user._id)
                    ? mapping.peerIds.filter((id) => id !== user._id)
                    : [...mapping.peerIds, user._id]
                  setMapping({ ...mapping, peerIds: newPeerIds })
                }}
                className={styles.checkboxInput}
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
                onChange={() => {
                  const newJuniorIds = mapping.juniorIds.includes(user._id)
                    ? mapping.juniorIds.filter((id) => id !== user._id)
                    : [...mapping.juniorIds, user._id]
                  setMapping({ ...mapping, juniorIds: newJuniorIds })
                }}
                className={styles.checkboxInput}
              />
              {user.name}
            </label>
          ))}
        </div>

        <button type="submit" className={styles.submitButton}>
          Map Participants
        </button>
      </form>
    </div>
  )
}
