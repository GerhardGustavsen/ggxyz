import Sidebar from '../sidebar';
import type React from 'react';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // The type for the children prop
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className='border-[1px] h-full w-full absolute border-accent'>
    <Sidebar />
    <div className={`ml-sbxl`}>{children}</div>
  </div>
);

export default Container;
