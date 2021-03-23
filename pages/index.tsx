import Link from 'next/link';

const HomePage: React.FC = () => (
  <div className="home__page">
    <img src="" />
    <h1>Hello Next.js 👋</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa quia
      neque fugit voluptatum tenetur aspernatur nam consequatur quod asperiores,
      possimus hic reiciendis, suscipit voluptates error temporibus consectetur
      rem expeditae
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae
      tenetur hic, fugit vero quasi, debitis illum, libero qui dolores labore
      laboriosam facilis iste! Earum labore totam ullam numquam assumenda?
    </p>
    <Link href="/ninjas">
      <a>See Ninja Listing</a>
    </Link>
  </div>
);
export default HomePage;
