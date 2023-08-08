import Dir from './dir';

interface Props {
  path: string;
}

const Stack: React.FC<Props> = ({ path }) => (
  <div className='sm:text-xl sm:text-accent'>
    <Dir title='blog' path={path} url='/blog'>
      <Dir path={path} title={'2023'} url='/blog/2023' />
    </Dir>
    <Dir path={path} title={'test'} url='/test' />
    <Dir path={path} title={'404'} url='/nope' />
  </div>
);

export default Stack;
