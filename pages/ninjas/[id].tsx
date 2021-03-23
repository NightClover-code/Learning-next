import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Ninja } from '../../interfaces';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: { data: Ninja[] } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const paths = data.map(ninja => ({
    params: { id: ninja.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;
  const { data }: { data: Ninja[] } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return {
    props: {
      ninja: data,
    },
  };
};

interface NinjaDetailsProps {
  ninja: Ninja;
}

const NinjaDetails: React.FC<NinjaDetailsProps> = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default NinjaDetails;
