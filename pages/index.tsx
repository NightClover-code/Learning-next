import Link from 'next/link';

const App = () => (
  <div className="app__container">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default App;
