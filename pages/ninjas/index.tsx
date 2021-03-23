import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Ninja } from '../../interfaces';
import Head from 'next/head';
import styles from '../../styles/Ninjas.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: Ninja[] } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  return {
    props: {
      ninjas: data,
    },
  };
};

interface NinjasPageInterface {
  ninjas: Ninja[];
}

const NinjasPage: React.FC<NinjasPageInterface> = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Ninjas Page</h1>
        {ninjas.map(ninja => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NinjasPage;
