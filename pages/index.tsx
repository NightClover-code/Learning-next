import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const { title, text, btn } = styles;

const HomePage: React.FC = () => (
  <div className="home__page">
    <h1 className={title}>Hello Ninjas 👋</h1>
    <p className={text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa quia
      neque fugit voluptatum tenetur aspernatur nam consequatur quod asperiores,
      possimus hic reiciendis, suscipit voluptates error temporibus consectetur
      rem expeditae
    </p>
    <p className={text}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae
      tenetur hic, fugit vero quasi, debitis illum, libero qui dolores labore
      laboriosam facilis iste! Earum labore totam ullam numquam assumenda?
    </p>
    <Link href="/ninjas">
      <a className={btn}>See Ninja Listing</a>
    </Link>
  </div>
);
export default HomePage;
