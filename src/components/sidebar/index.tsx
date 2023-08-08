import Stack from './stack';
interface Props {
  path: string;
}

const SideBar: React.FC<Props> = ({ path }) => (
  <div className='md:w-sbmd lg:w-sblg 2xl:w-sb2xl h-full absolute bg-bgDark flex flex-col justify-between text-fgDark'>
    <div>
      <a href='/'>
        <h1 className='2xl:text-3xl lg:text-center text-xl  m-5 text-accent'>
          gerhard's page
        </h1>
      </a>
      <Stack path={path} />
    </div>
    <p className='text-center'>gergus.no - 2023</p>
  </div>
);

export default SideBar;
