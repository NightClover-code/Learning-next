import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  //router
  const router = useRouter();
  //redirecting
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="not__found">
      <h1>Oooops...</h1>
      <h2>That page was not found.</h2>
      <p>
        Go back to {''}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
