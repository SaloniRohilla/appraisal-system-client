import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';

export default function Dashboard() {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>Please <Link href="/login">login</Link> to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Hello, {user?.name}!</p>
      <ul>
        <li>
          <Link href="/appraisals">View Appraisals</Link>
        </li>
        <li>
          <Link href="/profile">View Profile</Link>
        </li>
        {user?.role === 'ADMIN' && (
          <li>
            <Link href="/admin">Admin Panel</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
