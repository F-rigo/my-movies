'use client';

import { useSession, signOut } from 'next-auth/react';
import PageContainer from '@/components/Containers/PageContainer';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <PageContainer>
        <h1>Loading...</h1>
      </PageContainer>
    );
  }

  if (!session) {
    redirect('/login');
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <PageContainer>
      <h1>Profile</h1>
      <div>
        <p>Email: {session.user?.email}</p>
        <p>Name: {session.user?.name}</p>
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="Profile"
            style={{ width: 100, height: 100, borderRadius: '50%' }}
          />
        )}
        <div style={{ marginTop: '2rem' }}>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
