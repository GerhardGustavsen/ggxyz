import type { ReactNode } from 'react';

interface Props {
  path: string;
  url: string;
  children?: ReactNode;
}

const Dir: React.FC<Props> = ({ path, url, children }) => {
  const last = path.slice(-1);
  if (last == '/') {
    path = path.slice(0, -1);
  }

  let style = 'pl-[10px] hover:ml-[0.5em]';
  if (url == path)
    style =
      'bg-accent pl-[11em] hover:ml-[-9.5em] ml-[-10em] font-bold text-fgLight';
  else if (path.includes(url)) style = 'pl-[10px] hover:ml-[0.5em] text-accent';

  return (
    <div className={'pl-[10px] my-1 md:my-0'}>
      <a href={url} className={style + ' block '}>
        ❯ {url.slice(1)}
      </a>
      {children}
    </div>
  );
};

export default Dir;
