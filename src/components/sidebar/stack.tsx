import Dir from './dir';

interface Props {
  path: string;
}

const Stack: React.FC<Props> = ({ path }) => (
  <div className='text-xl md:text-base'>
    <Dir path={path} url='/me' />
    <Dir path={path} url='/blog' />
    <Dir path={path} url='/code' />
    <Dir path={path} url='/novels' />
    <Dir path={path} url='/projects' />
    <Dir path={path} url='/literature' />
    <Dir path={path} url='/philosophy' />
    <Dir path={path} url='/links' />
  </div>
);

export default Stack;
