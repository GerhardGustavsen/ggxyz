import Sidebar from '../sidebar';
import type React from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  path: string;
}

const Layout: React.FC<Props> = ({ children, path }) => (
  <div className='border-[1px] h-full w-full absolute border-accent'>
    <Sidebar path={path} />
    <div className={`ml-sbxl pl-6 pt-6 w-[900px]`}>
      {children}
      <p
        className={
          'text-center my-6 py-6 border-t-[1px] border-fgLight font-bold'
        }
      >
        powered by astro 🚀
      </p>
    </div>
  </div>
);

export default Layout;
