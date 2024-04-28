import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectToHomeAfterSignOut = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if not signed in
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  return null;
};

export default RedirectToHomeAfterSignOut;