import Link from 'next/link';
import Image from 'next/image';
//nav bar component
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="logo" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninjas Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
