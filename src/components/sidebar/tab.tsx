interface Props {
  title: string;
  url: string;
}

const Tab: React.FC<Props> = ({ title, url }) => {
  const data = import.meta.url;
  console.log(data);
  return (
    <a href={url} className='block bg-accent pl-2 font-bold'>
      {title}
    </a>
  );
};

export default Tab;
