interface Props {
  name: string;
  url: string;
}

const Link: React.FC<Props> = ({ name, url }) => (
  <a
    className='text-accent underline mr-[1em] hover:bg-accent hover:text-black'
    href={'https://' + url}
  >
    {name}
  </a>
);

export default Link;
