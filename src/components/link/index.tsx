import '../../main.scss';

interface Props {
  name: string;
  url: string;
}

const Link: React.FC<Props> = ({ name, url }) => (
  <a className='text-accent underline link' href={'https://' + url}>
    {name}
  </a>
);

export default Link;
