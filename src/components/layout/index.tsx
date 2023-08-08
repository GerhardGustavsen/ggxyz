import Sidebar from '../sidebar';
import type React from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  path: string;
}

const Layout: React.FC<Props> = ({ children, path }) => (
  <div className='md:border-[1px] h-full w-full absolute border-accent'>
    <Sidebar path={path} />
    <div
      className={`md:ml-sbmd lg:ml-sblg 2xl:ml-sb2xl md:w-[675px] 2xl:w-[800px] p-6 w-full`}
    >
      {children}
      <p className={'text-center font-bold'}>powered by astro 🚀</p>
    </div>
  </div>
);

export default Layout;
