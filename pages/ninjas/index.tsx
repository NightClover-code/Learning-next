import axios from 'axios';
import { GetStaticProps } from 'next';
import { Ninja } from '../../interfaces';

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
    <div>
      <h1>Ninjas Page</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NinjasPage;
