import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '../styles/Register.module.css' // Correct path to the CSS module

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STAFF',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/auth/register', formData)
      router.push('/login')
    } catch (error) {
      console.error('Registration failed', error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.inputField}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={styles.inputField}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={styles.selectField}
          >
            <option value="STAFF">Staff</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
