import Tab from './tab';

const SideBar = () => (
  <div className='w-sbxl h-full absolute bg-bgDark flex flex-col justify-between text-fgDark'>
    <div>
      <h1 className='text-3xl text-center m-5 text-accent'>gerhard's page</h1>
      <Tab title={'home'} url='/' />
      <Tab title={'test'} url='test' />
      <Tab title={'tet'} url='' />
      <Tab title={'tet'} url='' />
      <Tab title={'tet'} url='' />
      <Tab title={'tet'} url='' />
    </div>
    <p className='text-center'>gergus.no - 2023</p>
  </div>
);

export default SideBar;
