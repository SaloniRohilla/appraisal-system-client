import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Appraisal System</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Please login to continue</p>
      )}
    </div>
  );
}