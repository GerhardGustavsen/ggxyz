import { Container } from 'postcss';
import Article from '../article';
import Astro from '../astro';
import Padding from '../layout/padding';

type JSONdoc = {
  title: string;
  text: string;
  img: string;
  date: string;
  type: string;
};

interface Props {
  all: any[];
  first?: JSONdoc[];
}

const Feed: React.FC<Props> = ({ all, first }) => {
  const sorted = all
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Padding>
      {first?.map((art) => (
        <Article json={art} />
      ))}
      {sorted.map((art) => (
        <Article json={art} />
      ))}
      <Astro />
    </Padding>
  );
};

export default Feed;
