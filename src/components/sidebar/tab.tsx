interface Props {
  path: string;
  title: string;
  url: string;
}

const Tab: React.FC<Props> = ({ path, title, url }) => (
  <a
    href={url}
    className={
      url.split('/')[1] == path.split('/')[1]
        ? 'block bg-accent pl-[110px] ml-[-100px] font-bold text-fgLight'
        : 'block pl-[10px]'
    }
  >
    {title}
  </a>
);

export default Tab;
