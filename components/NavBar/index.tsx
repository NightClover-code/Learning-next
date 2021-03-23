import Link from 'next/link';
//nav bar component
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/home">Home</Link>
      <Link href="/home">About</Link>
      <Link href="/home">Ninjas Listing</Link>
    </nav>
  );
};

export default NavBar;
