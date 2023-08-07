import Dir from './dir';
import Tab from './tab';
interface Props {
  url: string;
}

const SideBar: React.FC<Props> = ({ url }) => (
  <div className='w-sbxl h-full absolute bg-bgDark flex flex-col justify-between text-fgDark'>
    <div>
      <h1 className='text-3xl text-center m-5 text-accent'>gerhard's page</h1>
      <Dir title='blog'>
        <Tab path={url} title={'home'} url='/' />
        <Tab path={url} title={'test'} url='/test' />
      </Dir>
      <Dir title='images'>
        <Tab path={url} title={'home'} url='/' />
        <Tab path={url} title={'test'} url='/test' />
      </Dir>
      <Dir title='code'>
        <Tab path={url} title={'home'} url='/' />
        <Tab path={url} title={'test'} url='/test' />
      </Dir>
      <Dir title='philosophy & chill'>
        <Tab path={url} title={'home'} url='/' />
        <Tab path={url} title={'test'} url='/test' />
      </Dir>
      <Dir title='political rants'>
        <Tab path={url} title={'home'} url='/' />
        <Tab path={url} title={'test'} url='/test' />
      </Dir>
      <Dir title='novels'>
        <Tab path={url} title={'home'} url='/' />
        <Tab path={url} title={'test'} url='/test' />
      </Dir>
    </div>
    <p className='text-center'>gergus.no - 2023</p>
  </div>
);

export default SideBar;
