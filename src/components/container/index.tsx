import Sidebar from '../sidebar';
import type React from 'react';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // The type for the children prop
}

const l = 96;

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className='border-[1px] h-full w-full absolute border-[#8000ff]'>
    <Sidebar width={l} />
    <div className={`ml-${l}`}>{children}</div>
  </div>
);

export default Container;
