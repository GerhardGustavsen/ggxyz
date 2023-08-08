import Sidebar from '../sidebar';
import type React from 'react';
import type { ReactNode } from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

interface Props {
  children: ReactNode;
  path: string;
}

const Layout: React.FC<Props> = ({ children, path }) => (
  <div className='md:border-[1px] h-full w-full absolute border-accent md:flex'>
    <Breadcrumbs path={path} />
    <Sidebar path={path} />
    <div
      className={`md:ml-sbmd lg:ml-sblg 2xl:ml-sb2xl overflow-scroll flex-1`}
    >
      {children}
    </div>
  </div>
);

export default Layout;
