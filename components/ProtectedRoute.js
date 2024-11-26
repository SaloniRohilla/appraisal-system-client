import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ userRole, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!userRole || userRole !== 'admin') router.push('/login');
  }, [userRole, router]);

  return userRole === 'admin' ? children : null;
};

export default ProtectedRoute;
