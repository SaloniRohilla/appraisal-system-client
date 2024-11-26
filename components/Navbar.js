import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      {user ? (
        <>
          {user.role === 'ADMIN' && (
            <>
              <Link href="/admin/create-questions">Create Questions</Link>
              <Link href="/admin/map-participants">Map Participants</Link>
            </>
          )}
          <Link href="/appraisal/fill-appraisal">Fill Appraisal</Link>
          <Link href="/appraisal/view-appraisal">View Appraisals</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;