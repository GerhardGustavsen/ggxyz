import Tab from './tab';

const SideBar = () => (
  <div className='w-sbxl h-full absolute bg-bgDark flex flex-col justify-between'>
    <div>
      <h1 className='text-3xl text-center m-5 text-accent'>gerhard's page</h1>
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
