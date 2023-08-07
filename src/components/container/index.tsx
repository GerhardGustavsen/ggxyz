import React, { ReactNode } from 'react';
import Sidebar from '../sidebar';

const sidebarWidth = 96;

const Container = () => (
  <div className='border-[1px] h-full w-full absolute border-[#8000ff]'>
    <Sidebar width={sidebarWidth} />
    <div className={`ml-${sidebarWidth}`}>hello</div>
  </div>
);

export default Container;
