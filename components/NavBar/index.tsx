import Link from 'next/link';
//nav bar component
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/home">Home</Link>
    </nav>
  );
};

export default NavBar;
