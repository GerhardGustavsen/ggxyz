import React, { ReactNode } from 'react';
import Tab from './tab';

interface Props {
  width: number;
}

const SideBar: React.FC<Props> = ({ width }) => (
  <div className='w-96 h-full absolute bg-[#222222] flex flex-col justify-between'>
    <div>
      <h1 className='text-3xl text-center m-5 text-[#8000ff]'>
        gerhard's page
      </h1>
      <Tab title={'tet'} />
      <Tab title={'tet'} />
      <Tab title={'tet'} />
      <Tab title={'tet'} />
      <Tab title={'tet'} />
    </div>
    <p className='text-center'>gergus.no - 2023</p>
  </div>
);

export default SideBar;
