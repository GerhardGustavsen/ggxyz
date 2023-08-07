import Dir from './dir';
import Stack from './stack';
import Tab from './tab';
interface Props {
  path: string;
}

const SideBar: React.FC<Props> = ({ path }) => (
  <div className='w-sbxl h-full absolute bg-bgDark flex flex-col justify-between text-fgDark'>
    <div>
      <a href='/'>
        <h1 className='text-3xl text-center m-5 text-accent'>gerhard's page</h1>
      </a>
      <Stack path={path} />
    </div>
    <p className='text-center'>gergus.no - 2023</p>
  </div>
);

export default SideBar;
