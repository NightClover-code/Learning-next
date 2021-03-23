import axios from 'axios';
import { GetStaticPaths } from 'next';
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

const NinjaDetails = () => {
  return <div>Details for ninjas</div>;
};

export default NinjaDetails;
