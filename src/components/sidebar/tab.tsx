interface Props {
  path: string;
  title: string;
  url: string;
}

const Tab: React.FC<Props> = ({ path, title, url }) => (
  <a
    href={url}
    className={
      url == path
        ? 'block bg-accent pl-[110px] ml-[-100px] font-bold'
        : 'block pl-[10px]'
    }
  >
    {title}
  </a>
);

export default Tab;
