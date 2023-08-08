import type { ReactNode } from 'react';

interface Props {
  title: string;
  path: string;
  url: string;
  children?: ReactNode;
}

const Dir: React.FC<Props> = ({ title, path, url, children }) => {
  let style = 'block pl-[10px]';
  if (url == path)
    style = 'block bg-accent pl-[110px] ml-[-100px] font-bold text-fgLight';
  else if (path.includes(url)) style = 'block pl-[10px] text-accent';

  return (
    <div className={'pl-[10px]'}>
      <a href={url} className={style}>
        {title}
      </a>
      {children}
    </div>
  );
};

export default Dir;
