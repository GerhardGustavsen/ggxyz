import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Dir: React.FC<Props> = ({ title, children }) => (
  <div className={'pl-[10px]'}>
    <p className={'font-bold'}>{title}</p>
    {children}
  </div>
);

export default Dir;
