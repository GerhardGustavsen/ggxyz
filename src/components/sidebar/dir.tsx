import type { ReactNode } from 'react';

interface Props {
  title: string;
  path: string;
  url: string;
  children?: ReactNode;
}

const Dir: React.FC<Props> = ({ title, path, url, children }) => {
  let style = 'pl-[10px]';
  if (url == path)
    style = 'bg-accent pl-[110px] ml-[-100px] font-bold text-fgLight';
  else if (path.includes(url)) style = 'pl-[10px] text-accent';

  return (
    <div className={'pl-[10px]'}>
      <a href={url} className={style + 'block'}>
        {title}
      </a>
      {children}
    </div>
  );
};

export default Dir;
