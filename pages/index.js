import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from '../styles/Index.module.css' // Import the styles from the CSS Module

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeMessage}>Appraisal System</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p className={styles.roleInfo}>Role: {user.role}</p>
        </div>
      ) : (
        <p className={styles.loginPrompt}>Please login to continue</p>
      )}
    </div>
  )
}
