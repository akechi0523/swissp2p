"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/buy');
  }, []);

  return null;
};

export default Dashboard;

